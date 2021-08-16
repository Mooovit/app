const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            src: path.join(__dirname, "./src"),
            componentsUI: path.join(__dirname, "./src/components/ui"),
            containers: path.join(__dirname, "./src/components/containers"),
            layouts: path.join(__dirname, "./src/layouts"),
            core: path.join(__dirname, "./src/core"),
          },
        },
      ],
    ],
  };
};
