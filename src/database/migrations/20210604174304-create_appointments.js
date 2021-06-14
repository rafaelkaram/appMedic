'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Appointments", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			physicianId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Physicians", key: "id" },
				onUpdate: "RESTRICT",
				onDelete: "RESTRICT"
			},
			patientId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Patients", key: "id" },
				onUpdate: "RESTRICT",
				onDelete: "RESTRICT"
			},
			appointmentDate: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal(
					"CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
				),
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Appointments");
	}
};
