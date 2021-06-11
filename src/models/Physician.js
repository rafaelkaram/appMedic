const Sequelize = require("sequelize");

class Physician extends Sequelize.Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.hasMany(models.Appointments, { foreignKey: "physicianId" });
	}
}

module.exports = Physician;
