import _ from "underscore";
import mongoose from "mongoose";

import { connectionString } from "../secrets";
import { Income } from "../models/income";
import { Budget } from "../models/budget";
import { Expense } from "../models/expense";
import dropDb from "./dropDb";
import { generateBudgets, generateIncomes, generateExpenses } from "./_dataGenerators";

const seedDatabase = async () => {
    try {
        const createdBudgetIds = (await Budget.insertMany(generateBudgets())).map(
            budget => budget.id
        );
        const createdIncomes = await Income.insertMany(generateIncomes(createdBudgetIds));
        const createdExpenses = await Expense.insertMany(generateExpenses(createdBudgetIds));

        console.info(
            `Seeded database with: \n${createdBudgetIds.length} budget entries\n${
                createdIncomes.length
            } income entries\n${createdExpenses.length} expense entries`
        );
    } catch (error) {
        console.log(error);
    }
};

(async () => {
    await mongoose.connect(connectionString);
    await dropDb(mongoose.connection);
    await seedDatabase();

    console.log("Disconnecting...");
    mongoose.disconnect();
})();
