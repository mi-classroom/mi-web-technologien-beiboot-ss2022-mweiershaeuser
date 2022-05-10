module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  coveragePathIgnorePatterns: ["jest-global-mocks.ts"],
};
