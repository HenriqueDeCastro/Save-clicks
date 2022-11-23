/** jest.config.js */

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {"src(.*)": "<rootDir>/src/$1"}
};
