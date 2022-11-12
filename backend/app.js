const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const GenralRoutes = require("./Routes/GenralRoutes");
const { connectDB } = require("./config/db");
const ContactMe = require("./Models/ContactMe");
const AdminRoutes = require("./Routes/Admin.route");
const fileUpload = require("express-fileupload");
const { isLogin } = require("./middleware/loginVerify.middleware");
const path = require("path");

dotenv.config();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/backend/temp/",
  })
);

app.use((req, res, next) => {
  console.log(req.files);
  next();
});

app.get("/", (req, res) => {
  const alldata = ContactMe.find();
  res.send(JSON.stringify(alldata));
});

app.use("/api", GenralRoutes);
app.use("/api", isLogin, AdminRoutes);

const { PORT } = process.env;

connectDB(() => {
  app.listen(PORT, () => {
    console.log(`server is started at : http://localhost:${PORT}/`);
  });
});
