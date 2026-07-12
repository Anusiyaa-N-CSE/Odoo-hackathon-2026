const db = require("../config/db");

const User = {
    create: (data, callback) => {
        const sql =
            "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)";

        db.query(
            sql,
            [data.name, data.email, data.password, data.role],
            callback
        );
    },

    findByEmail: (email, callback) => {
        db.query(
            "SELECT * FROM users WHERE email=?",
            [email],
            callback
        );
    }
};

module.exports = User;