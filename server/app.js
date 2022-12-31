const express = require("express");
require("express-async-errors");
const app = express();
const cors = requre("cors");

app.use(cors());
app.use(express.json());

module.exports = app;
