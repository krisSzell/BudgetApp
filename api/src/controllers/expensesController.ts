import { Request, Response } from "express";

import { Expense } from "@models/expense";
import { asyncRoute } from "./asyncWrapper";

export const index = asyncRoute(
    async (_request: Request, response: Response) => {
        const result = await Expense.find();

        response.send(result);
    }
);
