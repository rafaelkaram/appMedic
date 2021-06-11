const Sequelize = require("sequelize");

class Appointments extends Sequelize.Model {
	static init(sequelize) {
		super.init(
			{
				appointmentDate: Sequelize.DATE,
				description: Sequelize.STRING,
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.Physician, { foreignKey: "physicianId" });
        this.belongsTo(models.Patient, { foreignKey: "patientId" });
	}
}

module.exports = Appointments;
