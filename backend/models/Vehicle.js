const db = require("../config/db");

const Vehicle = {

    create: (data, callback) => {
        const sql = `
            INSERT INTO vehicles
            (vehicle_number, vehicle_type, model, capacity, status)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                data.vehicle_number,
                data.vehicle_type,
                data.model,
                data.capacity,
                data.status
            ],
            callback
        );
    },

    getAll: (callback) => {
        db.query(
            "SELECT * FROM vehicles",
            callback
        );
    },

    getById: (id, callback) => {
        db.query(
            "SELECT * FROM vehicles WHERE id = ?",
            [id],
            callback
        );
    },

    update: (id, data, callback) => {
        const sql = `
            UPDATE vehicles
            SET
                vehicle_number = ?,
                vehicle_type = ?,
                model = ?,
                capacity = ?,
                status = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                data.vehicle_number,
                data.vehicle_type,
                data.model,
                data.capacity,
                data.status,
                id
            ],
            callback
        );
    },

    delete: (id, callback) => {
        db.query(
            "DELETE FROM vehicles WHERE id = ?",
            [id],
            callback
        );
    }

};

module.exports = Vehicle;