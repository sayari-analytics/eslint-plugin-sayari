/**
 * @fileoverview Custom rules built for Sayari Graph
 * @author Sayari Analytics
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const allRules = {
  'strict-mui-imports': require('./lib/rules/strict-mui-imports'),
  'no-conditional-literals-in-jsx': require('./lib/rules/no-conditional-literals-in-jsx'),
  'no-unwrapped-jsx-text': require('./lib/rules/no-unwrapped-jsx-text'),
  'polyfill-resize-observer': require('./lib/rules/polyfill-resize-observer')
}

const rulesConfig = {
  plugins: ['@sayari'],
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  rules: {
    '@sayari/strict-mui-imports': 2,
    '@sayari/no-conditional-literals-in-jsx': 2,
    '@sayari/no-unwrapped-jsx-text': 2,
    '@sayari/polyfill-resize-observer': 2,
  }
}

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: allRules,
  configs: {
    recommended: rulesConfig,
    all: rulesConfig
  }
}
