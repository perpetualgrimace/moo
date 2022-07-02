const { secretString } = require("./data/secretString.js");

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    secret: secretString,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://averroes.andal.us:8000/api", // production api
  },
  reactStrictMode: true,
};
