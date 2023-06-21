module.exports = {
    testMatch: ["**/test/unit/**/*.spec.ts"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleFileExtensions: ["ts", "js"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
  };
  