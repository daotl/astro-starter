import path from 'node:path'
import { fileURLToPath } from 'node:url'

import config from '@daotl/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import parserTs from '@typescript-eslint/parser'
import unocss from '@unocss/eslint-plugin'
import parserAstro from 'astro-eslint-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  {
    ignores: ['.astro', 'src/env.d.ts', 'cypress'],
  },
  ...config(),
  // {
  //   rules: {
  //     'arrow-parens': 'off',
  //   },
  // },
  // Astro
  ...compat.extends('plugin:astro/recommended'),
  {
    files: ['**/*.astro'],
    // Parse the script in `.astro` as TypeScript by adding the following configuration.
    // It's the setting you need when using TypeScript.
    languageOptions: {
      parser: parserAstro,
      parserOptions: {
        parser: parserTs,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      // Ignore `Props` for `*.astro`
      'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_|^Props$|^Params$', args: 'after-used', argsIgnorePattern: '^_' }],
      // ...pluginAstro.configs.recommended.rules,
      // `style/jsx-*` that conflict with Astro template
      'style/jsx-indent': 'off',
      'style/jsx-one-expression-per-line': 'off',
    },
  },

  unocss.configs.flat,
]
