import { Document, Schema, model, Model } from "mongoose";
import { Decimal128 } from "mongodb";

import { IExpense } from "@interfaces/expense";

export interface IExpenseModel extends IExpense, Document {}

const ExpenseSchema: Schema = new Schema({
    budgetId: { type: String, required: true },
    value: { type: Decimal128, required: true },
    createdAt: Date,
    comment: String
});

export const Expense: Model<IExpenseModel> = model<IExpenseModel>(
    "Expense",
    ExpenseSchema
);
