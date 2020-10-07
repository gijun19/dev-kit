'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: ['prettier/@typescript-eslint'],
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ],
};
