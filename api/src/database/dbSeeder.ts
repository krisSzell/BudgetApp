import _ from "underscore";
import mongoose from "mongoose";
import faker from "faker";

import { connectionString } from "../secrets";
import { IBudget } from "../interfaces/budget";
import { Income } from "../models/income";
import { Budget } from "../models/budget";
import { IIncome } from "../interfaces/income";

mongoose.connect(connectionString);

const generateBudgets = (): IBudget[] => {
    const budgetsSeed: any[] = [];

    _.times(12, (index: number) => {
        budgetsSeed.push({ year: 2019, month: index });

        if (index > 5) {
            budgetsSeed.push({ year: 2018, month: index });
        }
    });

    return budgetsSeed;
};

const generateIncome = (budgetId: string): IIncome => ({
    budgetId,
    comment: faker.random.boolean() ? faker.lorem.sentence() : "",
    value: faker.random.number({ min: 100, max: 5000, precision: 2 })
});

const generateIncomes = (budgetIds: string[]) => {
    const incomesSeed: IIncome[] = [];

    budgetIds.forEach(id =>
        _.times(faker.random.number({ min: 1, max: 6 }), () =>
            incomesSeed.push(generateIncome(id))
        )
    );

    return incomesSeed;
};

const seedDatabase = async () => {
    try {
        const createdBudgets = await Budget.insertMany(generateBudgets());
        const createdIncomes = await Income.insertMany(
            generateIncomes(createdBudgets.map(budget => budget.id))
        );

        console.info(
            `Seeded database with: \n${createdBudgets.length} budget entries\n${
                createdIncomes.length
            } income entries`
        );
    } catch (error) {
        console.log(error);
    }
};

seedDatabase();
