const express = require("express");
const { loginCtrls } = require("../../controller/auth/loginCtrls");
const loginRoute = express.Router();

// Middleware to check if user is authenticated
loginRoute.post("/login", loginCtrls);

// now its time to export login routes

module.exports = loginRoute;
