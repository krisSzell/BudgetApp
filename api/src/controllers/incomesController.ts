import { Request, Response } from "express";

import { Income } from "@models/income";
import { asyncRoute } from "./_asyncWrapper";

export const index = asyncRoute(
    async (_request: Request, response: Response) => {
        const result = await Income.find();

        response.send(result);
    }
);
