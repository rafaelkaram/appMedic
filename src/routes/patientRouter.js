const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientController");

patientRouter.get("/list", patientController.listAllPatients);
patientRouter.get("/search/:name", patientController.searchPatientByName);
patientRouter.get("/physician/:id", patientController.searchPatientByPhysicianId);
patientRouter.post("/create", patientController.newPatient);
patientRouter.put("/update", patientController.updatePatient);

module.exports = patientRouter;