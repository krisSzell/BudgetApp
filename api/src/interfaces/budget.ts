import { IIncome } from "./income";
import { IExpense } from "./expense";

export interface IBudget {
    _id: any;
    year: number;
    month: number;
    incomes?: IIncome[];
    expenses?: IExpense[];
}
