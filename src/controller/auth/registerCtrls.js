const User = require("../../model/users");
var jwt = require("jsonwebtoken");
const registerCtrls = (req, res) => {
  // Implemented the logic of the registration method
  // First Check the user is alray registered or not registered
  // If registered, return a message indicating that
  // If not registered, check the email format and password strength
  // If all checks pass, register the user and return a success message
  User.findOne({ email: req.body.email }).then((user) => {
    if (user === null) {
      const user = new User(req.body);
      user
        .save()
        .then((d) => {
          var token = jwt.sign({ foo: "bar" }, "My token");
          res.json({
            message: "User registered successfully!",
            user: d,
            token: token,
          });
        })
        .catch((err) => {
          res.json({
            message: "Failed to register user",
            error: err,
          });
        });
    } else {
      // Check email format and password strength
      // Implement the necessary checks here
      // For instance, you can use a library like validator.js for email format validation and bcrypt for password hashing
      // If all checks pass, register the user and return a success message
      res.json({
        message: "User already registered!",
      });
    }
  });
};

module.exports = registerCtrls;
