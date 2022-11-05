const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

exports.connectDB = (cb) => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Mongodb Connected");
      cb();
    })
    .catch((err) => {
      console.error(err);
    });
};
