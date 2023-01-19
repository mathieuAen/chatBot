module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    indent: 'off',
    'no-console': 'off',
    'padded-blocks': ['error', { blocks: 'never' }],
    'eol-last': ['error', 'never'],
    'eslint linebreak-style': [0, 'error', 'windows']
  }
  // rules: {
  //   'class-methods-use-this': 0,
  //   'comma-dangle': ['error', 'never'],
  //   'linebreak-style': 0,
  //   'global-require': 0,
  //   'eslint linebreak-style': [0, 'error', 'windows']
  // }
};