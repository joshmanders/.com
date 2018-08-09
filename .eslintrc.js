module.exports = {
  extends: ['nifty/react'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'no-unused-expressions': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
  },
};
