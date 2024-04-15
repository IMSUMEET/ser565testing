// jest.config.ts

export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot)$":
      "jest-transform-stub",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
