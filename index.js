const express = require("express");
const app = express();
const connection = require("./db");
connection();

app.use(express.json());