import { IExpense } from "@interfaces/expense";
import faker = require("faker");
import _ from "underscore";

import { IBudget } from "@interfaces/budget";
import { IIncome } from "@interfaces/income";

export const generateBudgets = (): IBudget[] => {
    const budgetsSeed: any[] = [];

    _.times(12, (index: number) => {
        budgetsSeed.push({ year: 2019, month: index + 1 });

        if (index > 5) {
            budgetsSeed.push({ year: 2018, month: index + 1 });
        }
    });

    return budgetsSeed;
};

const generateIncome = (budgetId: string): IIncome => ({
    budgetId,
    comment: faker.random.boolean() ? faker.lorem.sentence() : "",
    value: faker.random.number({ min: 100, max: 5000, precision: 2 })
});

export const generateIncomes = (budgetIds: string[]) => {
    const incomesSeed: IIncome[] = [];

    budgetIds.forEach(id =>
        _.times(faker.random.number({ min: 1, max: 6 }), () => incomesSeed.push(generateIncome(id)))
    );

    return incomesSeed;
};

const generateExpense = (budgetId: string): IExpense => ({
    budgetId,
    comment: faker.random.boolean() ? faker.lorem.sentence() : "",
    value: faker.random.number({ min: 100, max: 1500, precision: 2 })
});

export const generateExpenses = (budgetIds: string[]) => {
    const expensesSeed: IExpense[] = [];

    budgetIds.forEach(id =>
        _.times(faker.random.number({ min: 1, max: 14 }), () =>
            expensesSeed.push(generateExpense(id))
        )
    );

    return expensesSeed;
};
