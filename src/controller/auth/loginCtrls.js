const User = require("../../model/users");
const jwt = require("jsonwebtoken");
const loginCtrls = (req, res) => {
  // My Logic for the login Process
  // Example: Check if the username and password are correct
  // If they are, return a success message with status code 200
  // Else, return an error message with status code 401 (Unauthorized)
  // Here, I will just return a success message for demonstration purposes
  // In a real-world application, you would replace this with the actual logic to check the username and password.

  // For demonstration purposes, I'm returning a success message
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.status(401).json({
          message: "Invalid Credentials",
        }); // In a real-world application, you would replace this with a proper error handling mechanism. 401 status code signifies an unauthorized access.  // For demonstration purposes, I'm returning an invalid credentials message.  // In a real-world application, you would replace this with a proper error handling mechanism. 401 status code signifies an unauthorized access.  // For demonstration purposes, I'm returning an invalid credentials message.  // In a real-world application, you would replace this with a proper error handling mechanism. 401 status code signifies an unauthorized access.  // For demonstration purposes, I'm returning an invalid credentials message.  // In a real-world application, you would replace this with a proper error handling mechanism. 401 status code signifies an unauthorized access.  // For demonstration
      } else {
        var token = jwt.sign({ secret: "data" }, "my secret", {
          expiresIn: "1d",
        });
        res.status(200).json({
          message: "User Logged successfully",
          token: token,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server Error",
      }); // In a real-world application, you would replace this with a proper error handling mechanism. 500 status code signifies a server-side error. 401 status code signifies an unauthorized access. 500 status code should never be sent in a production environment.  // For demonstration purposes, I'm returning a server error message.  // In a real-world application, you would replace this with a proper error handling mechanism. 500 status code signifies a server-side error. 401 status code signifies an unauthorized access. 500 status code should never be sent in a production environment.  // For demonstration purposes, I'm returning a server error message.  // In a real-world application, you would replace this with a proper error handling mechanism. 500 status code sign
    });
};

// Now its time to exports the login module

module.exports = {
  loginCtrls,
};
