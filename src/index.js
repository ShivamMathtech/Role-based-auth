const express = require("express");
const register = require("./routes/auth/register");
const loginRoute = require("./routes/auth/login");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use("/auth", register);
app.use("/auth", loginRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
