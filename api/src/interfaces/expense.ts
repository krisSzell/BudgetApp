import { Decimal128 } from "bson";

export interface IExpense {
    createdAt?: Date;
    value: Decimal128;
    comment?: string;
}
