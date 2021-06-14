'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Patients",
			[
				{
					name: "Bruno Fernandes",
					email: "b.fernandes@mail.com",
					phone: "3286-5689",
				},
				{
					name: "Cleiton Novaes",
					email: "c.novaes@mail.com",
					phone: "9978-7889",
				},
				{
					name: "Guilherme Otaku",
					email: "g.otaku@mail.com",
					phone: "9868-9894",
				},
				{
					name: "Camila Thamires",
					email: "c.thamires@mail.com",
					phone: "9911-5831",
				},
				{
					name: "Stefany Stigar",
					email: "s.stygar@mail.com",
					phone: "9897-3138",
				},
				{
					name: "Polly Oliveira",
					email: "p.oliveira@mail.com",
					phone: "9864-9872",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Patients", null, {});
	}
};
