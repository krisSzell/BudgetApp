import { Request, Response, response } from "express";

import { asyncRoute } from "./_asyncWrapper";
import { IIncomeRequest } from "@interfaces/income";
import incomesRepository from "@repositories/incomesRepository";
import BudgetNotFoundError from "@errors/BudgetNotFoundError";

export const index = asyncRoute(async (_request: Request, response: Response) =>
    response.send(await incomesRepository.getAll())
);

export const add = asyncRoute(async (request: IIncomeRequest, response: Response) => {
    response.status(201).send(await incomesRepository.add(request.body));
});
