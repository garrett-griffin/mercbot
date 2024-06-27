/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};