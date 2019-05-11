// const path = require("path");

module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    moduleNameMapper: {
        "@controllers(.*)$": "<rootDir>/src/controllers/$1",
        "@models(.*)$": "<rootDir>/src/models/$1",
        "@interfaces(.*)$": "<rootDir>/src/interfaces/$1"
    }
};
