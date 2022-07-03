const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  devtool: "source-map",
};

const config = (env) => {
  const environment = env.development ? ".development" : null;
  console.log("-------------------------------------------------");
  console.log(`Webpack compiling for ${environment} environment`);
  return merge(commonConfig(environment), devConfig);
};

module.exports = config;
