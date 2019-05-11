import { Decimal128 } from "bson";

export interface IIncome {
    budgetId: string;
    value: Decimal128;
    createdAt?: Date;
    comment?: string;
}
