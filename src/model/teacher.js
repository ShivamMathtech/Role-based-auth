// const Cat = mongoose.model("Cat", { name: String });

const { mongoose } = require("../config/db");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const teacher = mongoose.model("teacher", teacherSchema);

// Now it's time to export the user Collection

module.exports = teacher;
