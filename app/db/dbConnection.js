require("dotenv").config();
const mongoose = require("mongoose");

//mongoose.set("strictQuery", true);

mongoose.connect(`${process.env.DB}`, () => {
  console.log("database is connected");
});
