const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const emailRoutes = require("./routes/email");
const cors = require('cors');
const multer = require('multer');
const bodyParser = express.json;

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../kahsoftware/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
 
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});


mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected db"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/post", postRoutes);

app.listen(8800, () => {
  console.log("connected");
});
