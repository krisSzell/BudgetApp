import { Request, Response } from "express";
import { Budget } from "@models/budget";
import { asyncRoute } from "./asyncWrapper";

export const index = asyncRoute(
    async (_request: Request, response: Response) => {
        const result = await Budget.find();
        response.send(result);
    }
);
