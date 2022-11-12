const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.isLogin = (req, res, next) => {
  const { headers } = req;
  const token = headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: "error",
      error: {
        authorization: true,
        message: "not Authorized",
      },
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({
        status: "error",
        error: {
          authorization: true,
          message: "token not valid",
        },
      });
    }
    next();
  });
};
