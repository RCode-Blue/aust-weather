const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
};

const config = (env) => {
  const environment = env.production ? ".production" : null;
  console.log("-------------------------------------------------");
  console.log(`Webpack compiling for ${environment} environment`);
  return merge(commonConfig(environment), prodConfig);
};

module.exports = config;
