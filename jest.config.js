module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  watchPathIgnorePatterns: ['globalConfig'],
  preset: '@shelf/jest-mongodb'
}
