module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'multiline-ternary': [2, "always-multiline"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-props-no-spreading': ['off'],
    "semi": ["error", "never"],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "react/prop-types": 0   //TODO:: REMOVE!
  },
};
