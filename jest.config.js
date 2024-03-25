module.exports = {
  preset: 'ts-jest',
  roots: [
    "<rootDir>/src"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/data/*.json",
    "!src/**/index.*",
  ],
  setupFiles: [],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/setup/setupTests.ts"
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  modulePaths: [
    "<rootDir>/src"
  ],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
    "json",
    "jsx",
    "node"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
