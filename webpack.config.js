const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/test.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
