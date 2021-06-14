const express = require("express");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController");

physicianRouter.get("/list", physicianController.listAllPhysicians);
physicianRouter.post("/create", physicianController.newPhysician);
physicianRouter.delete("/remove/:id", physicianController.deletePhysician);
physicianRouter.put("/update", physicianController.updatePhysician);

module.exports = physicianRouter;