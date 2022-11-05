const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const GenralRoutes = require("./Routes/GenralRoutes");
const { connectDB } = require("./config/db");
const ContactMe = require("./Models/ContactMe");

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const alldata = ContactMe.find();
  res.send(JSON.stringify(alldata));
});

app.use("/api", GenralRoutes);

const { PORT } = process.env;

connectDB(() => {
  app.listen(PORT, () => {
    console.log(`server is started at : http://localhost:${PORT}/`);
  });
});
