const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


var PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:bc2020@ds349628.mlab.com:49628/heroku_8cvcsg88", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});