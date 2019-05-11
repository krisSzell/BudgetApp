import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./router";
import { connectionString } from "./secrets";
const { PORT = 8080 } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection;
mongoose.connect(connectionString);

app.get("/", (_req: any, res: any) => res.send("Hello World with Express"));
app.use("/api", router);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Running BudgetApp on port ${PORT}`); 
    });
}

export default app;
