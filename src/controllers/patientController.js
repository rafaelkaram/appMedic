const Patient = require("../models/Patient");
const Appointments = require("../models/Appointment");
const Sequelize = require("sequelize");

module.exports = {
  async listAllPatients(req, res) {
    const patients = await Patient.findAll({
      order: [["id", "ASC"]],
    }).catch((error) => {
      res.status(500).json({ msg: "Falha na conexão." });
    });

    if (patients)
      if (patients == "")
        res.status(404).json({ msg: "Não foi possível encontrar pacientes." });
      else res.status(200).json({ patients });
    else res.status(404).json({ msg: "Não foi possível encontrar pacientes." });
  },

  async searchPatientByName(req, res) {
    const name = req.params.name;
    const patient = await Patient.findOne({
      where: { name },
    }).catch((error) => {
      res.status(500).json({ msg: "Falha na conexão." });
    });

    if (patient)
      if (patient == "")
        res.status(404).json({ msg: "Não foi possível encontrar paciente." });
      else res.status(200).json({ patient });
    else res.status(404).json({ msg: "Não foi possível encontrar paciente." });
  },

  async searchPatientByPhysicianId(req, res) {
    const physicianId = req.params.id;
    const patients = await Patient.findAll({
      include: [
        {
          model: Appointments,
          required: true,
          where: { physicianId }
        }
      ],
    }).catch((error) => {
      res.status(500).json({ msg: "Falha na conexão.", error });
    });

    if (patients) {
      if (patients == "")
        res.status(404).json({ msg: "Não foi possível encontrar paciente." });
    } else {
      res.status(404).json({ msg: "Não foi possível encontrar paciente." });
    }

    const patientList = patients.map(patient => {
      return {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        phone: patient.phone,
        createdAt: patient.createdAt,
        updatedAt: patient.updatedAt
      }
    });
    res.status(200).json({ patients: patientList })
  },

  async newPatient(req, res) {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400).json({
        msg: "Dados obrigatórios não foram preenchidos.",
      });
    }

    //Procurar no BD por paciente já existente
    const isPatientNew = await Patient.findOne({
      where: { email },
    });

    if (isPatientNew)
      res.status(403).json({ msg: "Paciente já foi cadastrado." });
    else {
      const patient = await Patient.create({
        name,
        email,
        phone,
      }).catch((error) => {
        res.status(500).json({ msg: "Não foi possível inserir os dados." });
      });
      if (patient)
        res.status(201).json({ msg: "Novo paciente foi adicionado." });
      else
        res
          .status(404)
          .json({ msg: "Não foi possível cadastrar novo paciente." });
    }
  },

  async deletePatient(req, res) {
    const patientId = req.params.id;
    const deletedPatient = await Patient.destroy({
      where: { id: patientId },
    }).catch(async (error) => {
      const patientHasRef = await Appointments.findOne({
        where: { patientId },
      }).catch((error) => {
        res.status(500).json({ msg: "Falha na conexão." });
      });
      if (patientHasRef)
        return res
          .status(403)
          .json({ msg: "Paciente possui exames em seu nome." });
    });
    if (deletedPatient != 0)
      res.status(200).json({ msg: "Paciente excluido com sucesso." });
    else res.status(404).json({ msg: "Paciente não encontrado." });
  },

  async updatePatient(req, res) {
    const patientId = req.body.id;
    const patient = req.body;
    if (!patientId) res.status(400).json({ msg: "ID do paciente vazio." });
    else {
      const patientExists = await Patient.findByPk(patientId);
      if (!patientExists)
        res.status(404).json({ msg: "Paciente não encontrado." });
      else {
        if (patient.name || patient.email) {
          await Patient.update(patient, {
            where: { id: patientId },
          });
          return res
            .status(200)
            .json({ msg: "Paciente atualizado com sucesso." });
        } else
          return res
            .status(400)
            .json({ msg: "Campos obrigatórios não preenchidos." });
      }
    }
  },
};
