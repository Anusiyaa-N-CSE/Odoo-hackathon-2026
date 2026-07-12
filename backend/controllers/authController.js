const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        User.findByEmail(email, async (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.length > 0) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            User.create(
                {
                    name,
                    email,
                    password: hashedPassword,
                    role
                },
                (err) => {
                    if (err)
                        return res.status(500).json(err);

                    res.status(201).json({
                        message: "User Registered Successfully"
                    });
                }
            );
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.login = (req, res) => {

    const { email, password } = req.body;

    User.findByEmail(email, async (err, result) => {

        if (err)
            return res.status(500).json(err);

        if (result.length === 0)
            return res.status(404).json({
                message: "User not found"
            });

        const user = result[0];

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword)
            return res.status(401).json({
                message: "Invalid Password"
            });

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET || "transitops_secret",
            {
                expiresIn: "1d"
            }
        );

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    });

};