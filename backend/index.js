const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const {authenticateToken} =require("./utilities")

mongoose.connect(process.env.connection_string);
const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});




app.listen(8000);
module.exports = app;
