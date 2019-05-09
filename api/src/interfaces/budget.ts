import { IIncome } from "./income";
import { IExpense } from "./expense";

export interface IBudget {
    year: number;
    month: number;
    incomes: IIncome[];
    expenses: IExpense[];
}
