const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const Physician = require("../models/Physician");
const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");


const connection = new Sequelize(dbConfig);

// Inicialize os modelos para o sequelize
Physician.init(connection);
Patient.init(connection);
Appointment.init(connection);

// Defina os relacionamentos entre os modelos
Physician.associate(connection.models);
Patient.associate(connection.models);
Appointment.associate(connection.models);

module.exports = connection;
