const express = require("express");
const {
  ContactMeController,
  GetAllProjectsController,
} = require("../Controllers/GenralController");
const app = express.Router();
const { body } = require("express-validator");
const { LoginAdminController } = require("../Controllers/AuthController");

app.post(
  "/contact-me",
  [
    body("email").isEmail().withMessage("Kindly Enter a valid email"),
    body("name").isLength({ min: 3 }).withMessage("Kinldy enter a valid name"),
    body("message")
      .isLength({ min: 3 })
      .withMessage("The Message Field is required"),
  ],
  ContactMeController
);

app.post(
  "/avi-login",
  [body("uername").isLength({ min: 3 }), body("password").isLength({ min: 8 })],
  LoginAdminController
);

app.get("/get-all-project", GetAllProjectsController);

module.exports = app;
