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
}

const rulesConfig = {
  plugins: ['sayari'],
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'sayari/strict-mui-imports': 2,
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

