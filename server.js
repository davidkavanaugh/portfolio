const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const passport = require("passport");
const usersRouter = require("./routes/users.route");
const contactRouter = require("./routes/contact.route");
const path = require("path");
const { PORT, MONGO_URI } = config;

// add middleware
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// DB Config
const db = `${MONGO_URI}`;
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB database.");
});

// Routes
app.use("/api/users", usersRouter);
app.use("/api/contact", contactRouter);

// Set static folder
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || `${PORT}`;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
