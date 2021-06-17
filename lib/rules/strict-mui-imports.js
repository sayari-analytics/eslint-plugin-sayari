'use strict'

/***
 ***  CONSTANTS
 */

const RULE_DESCRIPTION = 'Styles imported from @material-ui should come from @material-ui/core/styles to avoid overloading unused code from the dependency'
const RULE_ERR_MESSAGE = 'import declaration for {{ specifier }} should come from "@material-ui/core/styles"'

/***
 ***  export names collected from:
 ***  https://github.com/mui-org/material-ui/tree/next/packages/material-ui/src/styles
 */

const MATERIAL_UI_STYLE_EXPORTS = new Set([
  'alpha',
  'Theme',
  'Palette',
  'Easing',
  'easing',
  'styled',
  'darken',
  'lighten',
  'duration',
  'Duration',
  'CSSOBject',
  'Direction',
  'useTheme',
  'hexToRgb',
  'rgbToHex',
  'hslToRgb',
  'emphasize',
  'toUnitless',
  'Breakpoint',
  'withStyles',
  'makeStyles',
  'Transitions',
  'createTheme',
  'PaletteColor',
  'createStyles',
  'ClassNameMap',
  'getLuminance',
  'ThemeOptions',
  'adaptV4Theme',
  'ThemeProvider',
  'useThemeProps',
  'PaletteOptions',
  'decomposeColor',
  'recomposeColor',
  'createMuiTheme',
  'TypographyStyle',
  'ComponentsProps',
  'CreateMUIStyled',
  'unstable_getUnit',
  'getContrastRatio',
  'TypographyVariant',
  'TypographyVariants',
  'TransitionsOptions',
  'experimentalStyled',
  'ComponentsVariants',
  'BreakpointOverrides',
  'PaletteColorOptions',
  'ComponentsOverrides',
  'responsiveFontSizes',
  'ComponentsPropsList',
  'StyledEngineProvider',
  'StyledComponentProps',
  'unstable_useThemeProps',
  'DeprecatedThemeOptions',
  'TypographyVariantsOptions',
  'SimplePalletteColorOptions',
  'unstable_createMuiStrictModeTheme',
])

/***
 ***  RULE DEFINITION
 */

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    docs: {
      description: RULE_DESCRIPTION,
      category: 'Bundle Size Suggestion',
      url: 'https://material-ui.com/guides/minimizing-bundle-size/'
    },
    messages: {
      muiStyleImports: RULE_ERR_MESSAGE
    }
  },
  create: (context) => ({
    ImportDeclaration: (node) => {
      if (
        node.source.value.includes('@material-ui') &&
        node.source.value !== '@material-ui/core/styles'
      ) {
        node.specifiers && node.specifiers.map((item) => {
          if (MATERIAL_UI_STYLE_EXPORTS.has(item.local.name)) {
            return context.report({
              node,
              loc: item.loc,
              messageId: 'muiStyleImports',
              data: { specifier: item.local.name },
              fix: (fixer) => fixer.replaceText(node.source, '\'@material-ui/core/styles\'')
            })
          }
          return null
        })
      }
    }
  })
}
