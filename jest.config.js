const { defaults: jestDefaults } = require('jest-config')
const { defaults: tsJestDefaults } = require('ts-jest/presets')

module.exports = {
  preset: 'ts-jest',
  transform: {
    ...tsJestDefaults.transform,
    '^.+\\.(gql|graphql)$': 'ts-jest',
  },
  moduleFileExtensions: [
    ...jestDefaults.moduleFileExtensions,
    '.ts',
    '.tsx',
    '.gql',
    '.graphql',
  ],
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
      astTransformers: ['./src/transformer'],
    },
  },
}
