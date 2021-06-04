'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Appointments",
			[
				{
					physicianId: 1,
					patientId: 1,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Clínico Geral",
				},
				{
					physicianId: 1,
					patientId: 4,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Fonoaudiologia",
				},
				{
					physicianId: 2,
					patientId: 2,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Clínico Geral",
				},
				{
					physicianId: 2,
					patientId: 5,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Fisioterapia",
				},
				{
					physicianId: 3,
					patientId: 3,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Colonoscopia",
				},
				{
					physicianId: 3,
					patientId: 6,
					appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
					description: "Pediatria",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Appointments", null, {});
	}
};
