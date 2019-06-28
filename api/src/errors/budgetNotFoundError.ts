import { ErrorCode } from "@errors/_errorCodes";
import { ICustomError } from "@interfaces/customError";

export default class BudgetNotFoundError extends Error implements ICustomError {
    constructor(budgetId: string) {
        super();

        this.message = `Budget with id ${budgetId} has not been found.`;
        Error.captureStackTrace(this, BudgetNotFoundError);
    }

    get code() {
        return ErrorCode.BudgetNotFound;
    }
}
