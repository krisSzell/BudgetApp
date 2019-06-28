const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPlugin = require("webpack-shell-plugin");
const { NODE_ENV = "production" } = process.env;

module.exports = {
    entry: "./src/index.ts",
    mode: NODE_ENV,
    target: "node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@controllers": path.resolve(__dirname, "src/controllers/"),
            "@models": path.resolve(__dirname, "src/models/"),
            "@interfaces": path.resolve(__dirname, "src/interfaces/"),
            "@repositories": path.resolve(__dirname, "src/repositories/"),
            "@errors": path.resolve(__dirname, "src/errors/")
        }
    },
    module: {
        rules: [{ test: /\.ts$/, use: "ts-loader" }]
    },
    externals: [nodeExternals()],
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ["npm run start:dev"]
        })
    ],
    watch: NODE_ENV === "development"
};
