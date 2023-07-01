const { query } = require("express");
const users = require("../utils/users");


const validate = (req, res) => {
    const { email, password } = req.query
    let flag = false;
    users.forEach((user) => {
        if (email === user.email && password === user.password) {
            flag = true;
        }
    })
    return res.status(200).json({ access: flag })
}

module.exports = validate;