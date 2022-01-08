module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.svg$': "jest-transformer-svg"
  },
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/jest-coverage/'
}
