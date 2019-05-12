import { Document, Schema, model, Model } from "mongoose";

import { IIncome } from "@interfaces/income";
import { toReadable, toStoreable } from "./_monetaryExtensions";

export interface IIncomeModel extends IIncome, Document {}

const IncomeSchema: Schema = new Schema({
    budgetId: { type: String, required: true },
    value: { type: Number, required: true, get: toReadable, set: toStoreable },
    createdAt: { type: Date, default: Date.now },
    comment: String
});

export const Income: Model<IIncomeModel> = model<IIncomeModel>(
    "Income",
    IncomeSchema
);
