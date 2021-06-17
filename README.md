# eslint-plugin-sayari

Custom rules built for Sayari Graph

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sayari`:

```
$ npm install eslint-plugin-sayari --save-dev
```

## Usage

### Option 1

Add the `sayari` plugin recommended config to the extends section of your `.eslintrc` configuration file.

```json
{
  "extends": ["plugin:sayari/recommended"]
}
```

### Option 2

Add `sayari` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sayari"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sayari/rule-name": 2
  }
}
```

## Supported Rules

- _strict-mui-imports_:
  - prevents styles imported from `@material-ui` to come from `@material-ui/core/styles` to help the import tranformer to minimize final bundle
- _no-unwrapped-jsx-text_:
  - requires that JSX text that share a common parent with other elements be wrapped in a `<span>` tag
  - this prevents issues with this React bug when conflicted with things like google translate
