module.exports = {
  'preset': 'jest-expo',
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testMatch': [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  'moduleFileExtensions': [
    'js',
    'ts',
    'tsx',
  ],
  'globals': {
    'ts-jest': {
      'tsConfig': {
        'jsx': 'react',
      },
      'diagnostics': false,
    },
  },
  'moduleNameMapper': {
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
    'react-spring/native': '<rootDir>/node_modules/react-spring/native.cjs',
    'react-spring/renderprops': '<rootDir>/node_modules/react-spring/renderprops.cjs',
  },
  'modulePathIgnorePatterns': [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
  ],
};
