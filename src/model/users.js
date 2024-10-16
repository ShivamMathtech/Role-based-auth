// const Cat = mongoose.model("Cat", { name: String });

const { mongoose } = require("../config/db");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
const userSchema = new mongoose.Schema(
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
const User = mongoose.model("User", userSchema);

// Now it's time to export the user Collection

module.exports = User;
