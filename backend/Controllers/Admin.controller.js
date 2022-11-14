const ContactMe = require("../Models/ContactMe");
const { validationResult } = require("express-validator");
const pathConstructor = require("../util/pathConstructor");
const Project = require("../Models/Project.model");

exports.ContactMessagesController = async (req, res, next) => {
  try {
    const contactData = await ContactMe.find();
    return res.json({
      status: "ok",
      data: contactData,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: {
        message: "error while finding the data",
      },
    });
  }
};

exports.CreateNewProjectController = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      status: "error",
      error: {
        message: error.errors[0].msg,
      },
    });
  }

  const projectImage = req.files.projectimage;
  const imageName = Date.now() + "_" + projectImage.name;
  const uploadPath = pathConstructor("public") + imageName;
  try {
    await projectImage.mv(uploadPath);
    const newProject = await Project.create({
      title: req.body.title,
      shortDesc: req.body.shortDesc,
      img: imageName,
    });
    return res.json({
      status: "ok",
      message: "project created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error: {
        message: "someting went wrong while adding new project",
      },
    });
  }
};
