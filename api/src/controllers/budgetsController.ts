import { Request, Response } from "express";

import { Budget, toDto } from "@models/budget";
import { asyncRoute } from "./_asyncWrapper";
import incomesRepository from "@repositories/incomesRepository";
import { getAll as getAllExpenses } from "@repositories/expensesRepository";

export const index = asyncRoute(async (_request: Request, response: Response) => {
    const budgets = await Budget.find();

    const budgetDtos = await Promise.all(
        budgets.map(async budget =>
            toDto(
                budget,
                await incomesRepository.getAllByBugdetId(budget.id),
                await getAllExpenses(budget.id)
            )
        )
    );

    response.send(budgetDtos);
});
