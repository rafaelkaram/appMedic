const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middleware/auth");

appointmentRouter.get("/list", auth, appointmentController.listAllAppointments);
appointmentRouter.get("/patient/:id", appointmentController.searchAppointmentByPatientId);
appointmentRouter.get("/physician/:id", auth, appointmentController.searchAppointmentByPhysicianId);
appointmentRouter.post("/create", auth, appointmentController.newAppointment);
appointmentRouter.delete("/remove/:id", auth, appointmentController.deleteAppointment);

module.exports = appointmentRouter;