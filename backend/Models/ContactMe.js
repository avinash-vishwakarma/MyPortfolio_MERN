const mongoose = require("mongoose");

const { Schema } = mongoose;

const ContactMeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: String,
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ContactMe", ContactMeSchema);
