import { Model } from "mongoose";
import BaseRepository from "@repositories/baseRepository";
import { IBudget } from "@interfaces/budget";
import { Budget, toDto, IBudgetModel } from "@models/budget";

export interface IBudgetsRepository extends BaseRepository<Model<IBudgetModel>, IBudget> {}

class BudgetsRepository extends BaseRepository<Model<IBudgetModel>, IBudget> {
    constructor() {
        super(Budget, toDto);
    }
}

export default new BudgetsRepository();
