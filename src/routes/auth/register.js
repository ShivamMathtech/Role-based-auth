const express = require("express");
const registerCtrls = require("../../controller/auth/registerCtrls");
const register = express.Router();

// Provide the Register Route
register.post("/register", registerCtrls);

module.exports = register;
