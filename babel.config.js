module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      {
        alias: {
          assets: "./assets",
          components: "./src/components",
          modules: "./src/modules",
          lib: "./src/lib",
          types: "./src/types",
          constants: "./src/constants",
          screens: "./src/screens",
        },
      },
    ],
  };
};
