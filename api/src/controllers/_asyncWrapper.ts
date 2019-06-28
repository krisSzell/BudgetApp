import { Request, Response } from "express";
import BudgetNotFoundError from "@errors/BudgetNotFoundError";

export function asyncRoute(route: any) {
    return (request: Request, response: Response, next?: () => Response) =>
        Promise.resolve(route(request, response)).catch(error => {
            if (next) {
                next();
            }

            if (error instanceof BudgetNotFoundError) {
                return response.status(403).send(error.message);
            }

            response.status(500).send(error);
        });
}
