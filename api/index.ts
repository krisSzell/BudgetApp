import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./router";
import { connectionString } from "./secrets";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection;
mongoose.connect(connectionString);

app.get("/", (_req: any, res: any) => res.send("Hello World with Express"));
app.use("/api", router);

app.listen(port, () => {
    console.log(`Running BudgetApp on port ${port}`);
});
