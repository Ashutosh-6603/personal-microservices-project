// eslint.config.js

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/**
 * ESLint Flat Config for MicroSuite Monorepo
 * Works with ESLint v9+ (Flat Config format)
 */
export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, prettier, {
  files: ['**/*.{ts,tsx,js,jsx}'],
  ignores: ['eslint.config.js', 'node_modules', 'dist'],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.base.json',
      sourceType: 'module',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
});
