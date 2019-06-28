import { Document, Schema, model, Model } from "mongoose";

import { IExpense } from "@interfaces/expense";
import { toReadable, toStoreable } from "./_monetaryExtensions";

export interface IExpenseModel extends IExpense, Document {}

const ExpenseSchema: Schema = new Schema({
    budgetId: { type: String, required: true },
    value: { type: Number, required: true, get: toReadable, set: toStoreable },
    createdAt: { type: Date, default: Date.now },
    comment: String
});

export const Expense: Model<IExpenseModel> = model<IExpenseModel>("Expense", ExpenseSchema);

export function toDto(model: IExpenseModel): IExpense {
    const { budgetId, value, createdAt, comment } = model;

    return { budgetId, value, createdAt, comment };
}