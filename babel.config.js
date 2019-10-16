module.exports = function(api) {
    api.cache(true);
  
    const presets = [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["chrome >= 68"]
          }
        }
      ],
      ["@babel/preset-react"]
    ];
    const plugins = [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-optional-chaining",
      "react-hot-loader/babel",
      ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
      "transform-es2015-unicode-regex"
    ];
  
    return {
      presets,
      plugins
    };
  };
  