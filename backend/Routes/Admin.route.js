const express = require("express");
const { body } = require("express-validator");
const {
  ContactMessagesController,
  CreateNewProjectController,
  GetAllProjectsController,
} = require("../Controllers/Admin.controller");
const { vaidateFile } = require("../middleware/fileValidation.middleware");
const app = express.Router();

app.get("/admin-contact-message", ContactMessagesController);

app.post(
  "/admin/add-new-project",
  [
    body("title", "enter a valid title").isLength({
      min: 3,
    }),
    body("shortDesc", "enter a valid Description").isLength({
      min: 3,
    }),
  ],
  CreateNewProjectController
);

module.exports = app;
