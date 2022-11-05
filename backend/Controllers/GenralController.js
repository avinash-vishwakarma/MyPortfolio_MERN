const ContactMe = require("../Models/ContactMe");
const { validationResult } = require("express-validator");

module.exports.ContactMeController = async (req, res) => {
  const error = validationResult(req);
  console.log(error);
  if (!error.isEmpty()) {
    return res.status(400).json({
      status: "error",
      error: error,
    });
  }
  const { body } = req;
  const contactData = {
    name: body.name,
    email: body.email,
    message: body.message,
  };
  if (body.number) {
    contactData.number = body.number;
  }
  try {
    const newContactMe = await ContactMe.create(contactData);
    res.json({
      status: "ok",
      message: "the message has been submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: {
        message: "someting went wrong please try again",
      },
    });
  }
};
