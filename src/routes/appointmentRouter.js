const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");

appointmentRouter.get("/list", appointmentController.listAllAppointments);
appointmentRouter.get("/patient/:id", appointmentController.searchAppointmentByPatientId);
appointmentRouter.get("/physician/:id", appointmentController.searchAppointmentByPhysicianId);
appointmentRouter.post("/create", appointmentController.newAppointment);
appointmentRouter.delete("/remove/:id", appointmentController.deleteAppointment);

module.exports = appointmentRouter;