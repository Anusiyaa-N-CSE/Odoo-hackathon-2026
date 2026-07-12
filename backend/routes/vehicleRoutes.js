const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

// Add Vehicle
router.post("/", vehicleController.createVehicle);

// Get All Vehicles
router.get("/", vehicleController.getVehicles);

// Get Vehicle By ID
router.get("/:id", vehicleController.getVehicleById);

// Update Vehicle
router.put("/:id", vehicleController.updateVehicle);

// Delete Vehicle
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;