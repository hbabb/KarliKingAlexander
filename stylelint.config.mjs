// mcbc-react-ts\stylelint.config.mjs
import stylelintConfigStandard from 'stylelint-config-standard';
import stylelintOrder from 'stylelint-order';
import stylelintConfigPrettier from 'prettier-stylelint';

export default {
  extends: [
    stylelintConfigStandard,
    stylelintConfigPrettier
  ],
  plugins: [stylelintOrder],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': 'always',
    'block-no-empty': true,
    'unit-whitelist': ['em', 'rem', 's', '%'],
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'max-line-length': 80,
    'indentation': 2,
  },
  defaultSeverity: 'warning',
  ignoreFiles: ['node_modules/**/*', 'dist/**/*.css'],
};
