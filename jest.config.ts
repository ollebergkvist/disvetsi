// libs
import nextJest from 'next/jest'

// types
import type { Config } from 'jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/graphql/**',
    '!src/unused/**',
    '!src/types/**',
    '!src/stores/**',
    '!src/lib/queries/**',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  roots: ['src/tests', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  verbose: true,
}

export default createJestConfig(customJestConfig)
