const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./router");
const connectionString = require("./secrets");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection;
mongoose.connect(connectionString);

app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", router);

app.listen(port, () => {
    console.log(`Running BudgetApp on port ${port}`);
});
