module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'space-before-function-paren': [2, 'never'],
    'space-before-function-paren': 'off',
    'vue/array-bracket-spacing': 'off',
    'vue/arrow-spacing': 'off',
    'vue/block-spacing': 'off',
    'vue/brace-style': 'off',
    'vue/camelcase': 'off',
    'vue/comma-dangle': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/eqeqeq': 'off',
    'vue/key-spacing': 'off',
    'vue/match-component-file-name': 'off',
    'vue/object-curly-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'linebreak-style': [0, 'error', 'windows']
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
  ]
}
