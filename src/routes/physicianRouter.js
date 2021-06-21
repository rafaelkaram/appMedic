const express = require("express");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController");
const auth = require("../middleware/auth");

physicianRouter.post("/authentication", physicianController.authentication);
physicianRouter.get("/list", auth, physicianController.listAllPhysicians);
physicianRouter.post("/create", auth, physicianController.newPhysician);
physicianRouter.delete("/remove/:id", auth, physicianController.deletePhysician);
physicianRouter.put("/update", auth, physicianController.updatePhysician);

module.exports = physicianRouter;