const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");

appointmentRouter.get("/listAllAppointments", appointmentController.listAllAppointments);
appointmentRouter.post("/newAppointment", appointmentController.newAppointment);
appointmentRouter.delete("/deleteAppointment/:id", appointmentController.deleteAppointment);
appointmentRouter.put("/updateAppointment", appointmentController.updateAppointment);

module.exports = appointmentRouter;
