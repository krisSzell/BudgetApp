import { Income, toDto, IIncomeModel } from "@models/income";
import { IIncome } from "@interfaces/income";
import budgetsRepository, { IBudgetsRepository } from "@repositories/budgetsRepository";
import BaseRepository from "./baseRepository";
import { Model } from "mongoose";
import BudgetNotFoundError from "../errors/BudgetNotFoundError";

class IncomesRepository extends BaseRepository<Model<IIncomeModel>, IIncome> {
    constructor() {
        super(Income, toDto);
    }

    async getAllByBugdetId(budgetId: number) {
        return this.getAllFromParent(budgetId, "budgetId");
    }

    async add(input: IIncome): Promise<IIncome> {
        const budget = await budgetsRepository.getById(input.budgetId);

        if (!budget) {
            throw new BudgetNotFoundError(input.budgetId);
        }

        return await super.add(input);
    }
}

export default new IncomesRepository();

// export const getAll = async (budgetId: number) => {
//     return mapResultToDto<IIncomeModel, IIncome>(
//         await Income.where("budgetId")
//             .equals(budgetId)
//             .exec(),
//         toDto
//     );
// };
