module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    jest: true
  },
  overrides: [
    {
      files: "webpack.*.js",
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
