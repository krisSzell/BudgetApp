import { Request, Response } from "express";

export function asyncRoute(route: any) {
    return (request: Request, response: Response, next?: () => Response) =>
        Promise.resolve(route(request, response)).catch(error => {
            if (next) {
                next();
            }

            response.status(500).send(error);
        });
}
