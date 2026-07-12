const Vehicle = require("../models/Vehicle");

// Add Vehicle
exports.createVehicle = (req, res) => {

    Vehicle.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Vehicle Added Successfully"
        });

    });

};

// Get All Vehicles
exports.getVehicles = (req, res) => {

    Vehicle.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

// Get Vehicle By ID
exports.getVehicleById = (req, res) => {

    Vehicle.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

// Update Vehicle
exports.updateVehicle = (req, res) => {

    Vehicle.update(req.params.id, req.body, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Vehicle Updated Successfully"
        });

    });

};

// Delete Vehicle
exports.deleteVehicle = (req, res) => {

    Vehicle.delete(req.params.id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Vehicle Deleted Successfully"
        });

    });

};