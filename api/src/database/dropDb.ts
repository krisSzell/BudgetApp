import mongoose from "mongoose";

const dropCollection = async (connection: mongoose.Connection, name: string) => {
    console.log(`Dropping ${name} collection`);
    try {
        await connection.dropCollection(name);

        console.log(`Successfully dropped ${name} collection`);
    } catch (error) {
        console.log("Drop failed:");
        console.trace(error);
    }
};

const collections = ["budgets", "incomes", "expenses"];

export default (connection: mongoose.Connection) => {
    collections.forEach(collectionName => dropCollection(connection, collectionName));
};
