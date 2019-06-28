import { index as allBudgets } from "@controllers/budgetsController";
import { index as allIncomes, add } from "@controllers/incomesController";

const router = require("express").Router();

router.get("/", (_req: any, res: any) => {
    res.json({ status: "API is working", message: "Hello" });
});

router.get("/budgets", allBudgets);

router
    .route("/incomes")
    .get(allIncomes)
    .post(add);

export default router;
