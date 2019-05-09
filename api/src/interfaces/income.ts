import { Decimal128 } from "bson";

export interface IIncome {
    createdAt?: Date;
    comment?: string;
    value: Decimal128;
    budgetId: string;
}
