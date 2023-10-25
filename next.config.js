const { secretString } = require("./data/secretString.js");
const { pathPrefix } = require("./environment.js");

module.exports = {
  basePath: `/${pathPrefix}`,
  output: "standalone",
  serverRuntimeConfig: {
    secret: secretString,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/${pathPrefix}/api` // development api
        : `http://averroes.andal.us:8000/${pathPrefix}/api`, // production api
  },
  reactStrictMode: true,
};
