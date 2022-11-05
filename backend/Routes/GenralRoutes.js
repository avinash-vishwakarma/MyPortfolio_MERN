const express = require("express");
const { ContactMeController } = require("../Controllers/GenralController");
const app = express.Router();
const { body } = require("express-validator");

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

module.exports = app;
