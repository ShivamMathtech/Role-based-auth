const teacher = require("../../model/teacher");
const jwt = require("jsonwebtoken");
const teacherCtrls = (req, res) => {
  // Code for teacher controller goes here
  // Implementing CRUD operations for teacher model
  teacher.findOne({ email: req.body.email }).then((d) => {
    if (d === null) {
      const Teacher = new teacher(req.body);
      Teacher.save()
        .then((result) => {
          const token = jwt.sign({ secret: "foo" }, "My Secret");
          res.status(201).json({
            message: "Teacher created successfully",
            result: result,
            token: token,
          });
        })
        .catch((err) => {
          res.json({
            message: "Failed to register user",
            error: err.message,
          });
        });
    } else {
      res.status(409).json({
        message: "User already exists",
      });
    }
  });
};

// now exports the controller

module.exports = teacherCtrls;
