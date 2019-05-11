import { Document, Schema, model, Model } from "mongoose";
import { Decimal128 } from "mongodb";

import { IIncome } from "@interfaces/income";

export interface IIncomeModel extends IIncome, Document {}

const IncomeSchema: Schema = new Schema({
    budgetId: { type: String, required: true },
    value: { type: Decimal128, required: true },
    createdAt: Date,
    comment: String
});

export const Income: Model<IIncomeModel> = model<IIncomeModel>(
    "Income",
    IncomeSchema
);
