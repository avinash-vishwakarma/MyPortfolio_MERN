const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

exports.LoginAdminController = (req, res) => {
  const { body } = req;
  const secretUserName = process.env.ADMIN_USERNAME;
  const secretPassword = process.env.ADMIN_PASSWORD;
  if (
    body.username &&
    body.username === secretUserName &&
    body.password &&
    body.password === secretPassword
  ) {
    // genrate the token and send back the token
    const token = jwt.sign({ username: "aviansh" }, process.env.JWT_SECRET,{expiresIn : "1d"});
    res.json({
      status: "ok",
      token,
    });
  } else {
    res.status(401).json({
      status: "error",
      error: {
        message: "sorry wrong credentials",
      },
    });
  }
};
