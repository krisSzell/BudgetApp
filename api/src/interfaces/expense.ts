import { Decimal128 } from "bson";

export interface IExpense {
    budgetId: string;
    value: Decimal128;
    createdAt?: Date;
    comment?: string;
}
