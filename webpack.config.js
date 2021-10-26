const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "awsome-dropdowns.min.js",
    path: path.resolve(__dirname, "dist"),
  },
};
