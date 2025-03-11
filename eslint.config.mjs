import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}', '.prettierrc.js'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // 显式启用与 Prettier 风格一致的 ESLint 规则
      //quotes: ['error', 'single'], // 强制单引号 ‌:ml-citation{ref="3" data="citationList"}
      //semi: ['error', 'never'], // 禁用分号 ‌:ml-citation{ref="3" data="citationList"}
    },
  },
  prettierPlugin, // 应用 Prettier 格式化规则
  prettierConfig,
]
