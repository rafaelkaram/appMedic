'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Physicians",
			[
				{
					name: "Rafael Henrique Karam",
					email: "rafaelkaram@ufpr.br",
					password: "$2a$12$aff3q7/eHpx83jZWJu801eomZBIfCGh1T2GkwuprXAwSCmz84AvZW",
				},
				{
					name: "André Vitor Kuduavski",
					email: "andrevpk@ufpr.br",
					password: "$2a$12$aff3q7/eHpx83jZWJu801eomZBIfCGh1T2GkwuprXAwSCmz84AvZW",
				},
				{
					name: "Carlos Felipe Godinho Silva",
					email: "cfelipe@ufpr.br",
					password: "$2a$12$aff3q7/eHpx83jZWJu801eomZBIfCGh1T2GkwuprXAwSCmz84AvZW",
				},

			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Physicians", null, {});
	}
};
