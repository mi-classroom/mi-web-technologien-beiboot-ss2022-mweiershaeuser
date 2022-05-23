module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  coveragePathIgnorePatterns: [
    ".mock.ts",
    "/environments/*",
    "jest-global-mocks.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", ".mock.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
};
