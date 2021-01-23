module.exports = function () {
  return {
    name: "docusaurus-plugin-react-view",
    configureWebpack(_config, isServer, utils) {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        return {
          node: {
            fs: "empty",
          },
        };
      }
    },
  };
};
