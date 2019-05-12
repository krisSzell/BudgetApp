export interface IExpense {
    budgetId: string;
    value: number;
    createdAt?: Date;
    comment?: string;
}
