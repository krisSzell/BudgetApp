import { Request } from "express";
export interface IIncome {
    budgetId: string;
    value: number;
    createdAt?: Date;
    comment?: string;
}

export interface IIncomeRequest extends Request {
    body: IIncome;
}
