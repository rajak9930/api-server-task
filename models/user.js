const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true }, // Fixed duplicate and capitalization
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password is too short"],
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: [6, "Confirm password is too short"],
  },
});

// Create User Model
const User = mongoose.model("User", UserSchema);
module.exports = { User };
