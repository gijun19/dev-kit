'use strict';

module.exports = {
  plugins: ['@typescript-eslints'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        // Let TS inference occur
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-unused-vars': 'warn',
        // Requires are sometimes necessary
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
