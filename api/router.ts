import { index } from "@controllers/budget";

const router = require("express").Router();

router.get("/", (_req: any, res: any) => {
    res.json({ status: "API is working", message: "Hello" });
});

router.get("/budgets", index);

export default router;
