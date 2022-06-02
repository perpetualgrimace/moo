const { secretString } = require("./data/secretString.js");

module.exports = {
  serverRuntimeConfig: {
    secret: secretString,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/assets",
  //       permanent: true,
  //     },
  //     {
  //       source: "/tools",
  //       destination: "/assets",
  //       permanent: true,
  //     },
  //   ];
  // },
  reactStrictMode: true,
};
