const ContactMe = require("../Models/ContactMe");
const { validationResult } = require("express-validator");
const ProjectModel = require("../Models/Project.model");

module.exports.ContactMeController = async (req, res) => {
  const error = validationResult(req);
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

exports.GetAllProjectsController = async (req, res, next) => {
  try {
    const allProjects = await ProjectModel.find();
    return res.json({
      status: "ok",
      payload: allProjects,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      error: {
        message: "error while finding the data",
      },
    });
  }
};
