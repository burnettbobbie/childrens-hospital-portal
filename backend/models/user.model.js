
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    // _id: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
    title: {type: String, required: false},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    roles: [{type: mongoose.Schema.Types.ObjectId,ref: "Role"}]

  })
);

module.exports = User;
