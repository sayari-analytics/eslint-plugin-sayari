'use strict'

/***
 ***  RULE DEFINITION
 */

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    docs: {
      description: 'import the polyfill build from react-resize-detector for better browser compatability when using ResizeObserver API',
      category: 'Browser Compatability',
    },
    messages: {
      polyfillResizeObserver: 'imports from react-resize-detector should come from "react-resize-detector/build/withPolyfill"'
    }
  },
  create: (context) => ({
    ImportDeclaration: (node) => {
      if (node.source.value === 'react-resize-detector') {
        return context.report({
          node,
          messageId: 'polyfillResizeObserver',
          fix: (fixer) => fixer.replaceText(node.source, '\'react-resize-detector/build/withPolyfill\'')
        })
      }
    }
  })
}
