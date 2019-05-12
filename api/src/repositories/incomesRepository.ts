import { Income, toDto, IIncomeModel } from "@models/income";
import { mapResultToDto } from "./_dtoMapWrapper";
import { IIncome } from "@interfaces/income";

export const getAll = async (budgetId: number) => {
    return mapResultToDto<IIncomeModel, IIncome>(
        await Income.where("budgetId")
            .equals(budgetId)
            .exec(),
        toDto
    );
};
