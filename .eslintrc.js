module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import', 'mocha'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    'mocha/no-mocha-arrows': 'off',
    'no-param-reassign': 0,
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': 'off',
  },
};
