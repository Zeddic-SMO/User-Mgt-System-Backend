const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const NewUser = mongoose.model("NewUser", UserSchema)
module.exports = NewUser
