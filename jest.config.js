const { defaults } = require("jest-config");
const path = require("path");

module.exports = {
  clearMocks: true,
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "jest.config.js"],
  collectCoverage: false,
  setupFilesAfterEnv: [path.resolve(__dirname, "setupTests.js")],
  moduleNameMapper: {
    "^react$": "<rootDir>/node_modules/react/",
    "^.+\\.scss$": "identity-obj-proxy",
    "^.+\\.css$": "identity-obj-proxy",
    "^.+\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  watchman: true
};
