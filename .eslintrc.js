module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: { jsx: true },
    sourceType: 'script'
  },
  rules: {
    indent: ['error', 2, { 'SwitchCase': 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': ['error'],
    'no-multi-spaces': ['error'],
    'key-spacing': ['error'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-infix-ops': ['error'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-console': ['error'],
    'eqeqeq': ['error', 'always'],
    'max-len': ['error', { 'code': 200, 'ignoreStrings': true }],
    'keyword-spacing': 'error',
    'eol-last': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'arrow-parens': ['error', 'always'],
  },
}
