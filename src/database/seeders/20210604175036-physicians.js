'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Physicians",
			[
				{
					name: "Rafael Henrique Karam",
					email: "rafaelkaram@ufpr.br",
					password: "123",
				},
				{
					name: "André Vitor Kuduavski",
					email: "andrevpk@ufpr.br",
					password: "123",
				},
				{
					name: "Carlos Felipe Godinho Silva",
					email: "cfelipe@ufpr.br",
					password: "123",
				},

			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Physicians", null, {});
	}
};
