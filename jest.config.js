module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.test.ts",
    "!src/utils/*",
    "!src/index.tsx",
    "!src/interfaces/*.ts",
    "!src/setupTests.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
};
