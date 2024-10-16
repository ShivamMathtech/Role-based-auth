const express = require("express");
const teacherCtrls = require("../../controller/admin/teacherCtrls");
const adminRoute = express.Router();
adminRoute.post("/create/teacher", teacherCtrls);

module.exports = adminRoute;
