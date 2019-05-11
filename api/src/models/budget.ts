import { Document, Schema, model, Model } from "mongoose";

import { IBudget } from "@interfaces/budget";

export interface IBudgetModel extends IBudget, Document {}

const BudgetSchema: Schema = new Schema({
    year: { type: Number, required: true },
    month: { type: Number, required: true },
});

export const Budget: Model<IBudgetModel> = model<IBudgetModel>(
    "Budget",
    BudgetSchema
);
