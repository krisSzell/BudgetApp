import _ from "underscore";
import { IBudget } from "@interfaces/budget";
import { Budget } from "@models/budget";
import mongoose from "mongoose";
import { connectionString } from "../secrets";
import { ObjectId } from "bson";

mongoose.connect(connectionString);

const generateBudgets = () => {
    const budgetsSeed: any[] = [];

    _.times(12, (index: number) => {
        budgetsSeed.push({ year: 2019, month: index });

        if (index > 5) {
            budgetsSeed.push({ year: 2018, month: index });
        }
    });

    return budgetsSeed;
};

const generateIncomes = (budgetIds: ObjectId[]) => {

}

const seedDatabase = async () => {
    const createdBudgets = await Budget.insertMany(generateBudgets());
};
