import { Document, Schema, model, Model } from "mongoose";

import { IBudget } from "@interfaces/budget";
import { IExpense } from "@interfaces/expense";
import { IIncome } from "@interfaces/income";

export interface IBudgetModel extends IBudget, Document {}

const BudgetSchema: Schema = new Schema({
    year: { type: Number, required: true },
    month: { type: Number, required: true }
});

export const Budget: Model<IBudgetModel> = model<IBudgetModel>("Budget", BudgetSchema);

export const toDto = (
    model: IBudgetModel,
    incomes: IIncome[] = [],
    expenses: IExpense[] = []
): IBudget =>
    model
        ? {
              _id: model.id,
              year: model.year,
              month: model.month,
              incomes,
              expenses
          }
        : ({} as IBudget);
