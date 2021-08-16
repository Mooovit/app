const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["@ui-kitten/components"],
      },
    },
    argv
  );

  // Configure all our alias below
  config.resolve.alias = {
    ...config.resolve.alias,
    src: path.join(__dirname, "./src"),
    componentsUI: path.join(__dirname, "./src/components/ui"),
    containers: path.join(__dirname, "./src/components/containers"),
    layouts: path.join(__dirname, "./src/layouts"),
    core: path.join(__dirname, "./src/core"),
  };

  return config;
};
