const Appointment = require("../models/Appointment");
const Sequelize = require("sequelize");
const Appointments = require("../models/Appointment");

module.exports = {
  async listAllAppointments(req, res) {
    const appointments = await Appointment.findAll({
      order: [["id", "ASC"]],
    }).catch((error) => {
      res.status(500).json({ msg: "Falha na conexão." });
    });

    if (appointments)
      if (appointments == "")
        res.status(404).json({ msg: "Não foi possível encontrar exames." });
      else res.status(200).json({ appointments });
    else res.status(404).json({ msg: "Não foi possível encontrar exames." });
  },

  async newAppointment(req, res) {
    const { physicianId, patientId, description, appointmentDate } = req.body;
    if (!physicianId || !patientId || !description) {
      res.status(400).json({
        msg: "Dados obrigatórios não foram preenchidos.",
      });
    }

    //Procurar no BD por exame já existente
    const isAppointmentNew = await Appointment.findOne({
      where: { physicianId, patientId, appointmentDate },
    });

    if (isAppointmentNew)
      res.status(403).json({ msg: "Exame já foi cadastrado." });
    else {
      const appointment = await Appointment.create({
        physicianId,
        patientId,
        appointmentDate,
        description,

      }).catch((error) => {
        res.status(500).json({ msg: "Não foi possível inserir os dados." });
      });
      if (appointment)
        res.status(201).json({ msg: "Novo exame foi adicionado." });
      else
        res
          .status(404)
          .json({ msg: "Não foi possível cadastrar novo exame." });
    }
  },
  async deleteAppointment(req, res) {
    const appointmentId = req.params.id;
    const deletedAppointment = await Appointment.destroy({
      where: { id: appointmentId },
    }).catch(async (error) => {
      const appointmentHasRef = await Appointments.findOne({
        where: { appointmentId },
      }).catch((error) => {
        res.status(500).json({ msg: "Falha na conexão." });
      });
      if (appointmentHasRef)
        return res
          .status(403)
          .json({ msg: "Exame possui exames em seu nome." });
    });
    if (deletedAppointment != 0)
      res.status(200).json({ msg: "Exame excluido com sucesso." });
    else res.status(404).json({ msg: "Exame não encontrado." });
  },
  async updateAppointment(req, res) {
    const appointmentId = req.body.id;
    const appointment = req.body;
    if (!appointmentId) res.status(400).json({ msg: "ID do exame vazio." });
    else {
      const appointmentExists = await Appointment.findByPk(appointmentId);
      if (!appointmentExists)
        res.status(404).json({ msg: "Exame não encontrado." });
      else {
        if (appointment.name || appointment.email) {
          await Appointment.update(appointment, {
            where: { id: appointmentId },
          });
          return res
            .status(200)
            .json({ msg: "Exame atualizado com sucesso." });
        } else
          return res
            .status(400)
            .json({ msg: "Campos obrigatórios não preenchidos." });
      }
    }
  },
};
