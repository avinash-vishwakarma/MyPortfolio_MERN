const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  shortDesc: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
