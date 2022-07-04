const { secretString } = require("./data/secretString.js");

module.exports = {
  output: "standalone",
  serverRuntimeConfig: {
    secret: secretString,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  reactStrictMode: true,
};
