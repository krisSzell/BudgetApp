import { mapResultToDto } from "./_dtoMapWrapper";
import { IExpenseModel, Expense, toDto } from "@models/expense";
import { IExpense } from "@interfaces/expense";

export const getAll = async (budgetId: number) => {
    return mapResultToDto<IExpenseModel, IExpense>(
        await Expense.where("budgetId")
            .equals(budgetId)
            .exec(),
        toDto
    );
};
