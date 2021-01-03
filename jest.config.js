module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  watchPathIgnorePatterns: ['globalConfig'],
  preset: '@shelf/jest-mongodb'
}
