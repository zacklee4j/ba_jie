import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.+(js|ts|jsx|tsx|mjs|cjs)", ".prettierrc.json"
      
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  //reactConfig,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: "detect", // 自动检测 React 版本
      },
    },
  },

  // JSX Runtime 配置（适用于 React 17+）
  jsxRuntime,
  // 全局变量和环境配置
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
        // "env": {
        //   "node": true,
        //   "browser": true,
        //   "commonjs": true,
        //   "es6": true,
        //   "jquery": true
        // }
      // ,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
     },
    // extends: {"eslint":"recommended",
    // "plugin":"prettier/recommended",},
       // 确保ESLint规则不会与Prettier冲突,
  },

  {
    plugins: {
      "@typescript-eslint": tsPlugin,
      //prettier:prettierPlugin, // 应用 Prettier 格式化规则
    },
    rules: {
      // 显式启用与 Prettier 风格一致的 ESLint 规则
      //quotes: ["error", "single"], // 强制单引号 ‌:ml-citation{ref="3" data="citationList"}
      //semi: ['error', 'never'], // 禁用分号 ‌:ml-citation{ref="3" data="citationList"}
      // React 相关
      //"react/jsx-uses-react": "warn",
      //"react/jsx-uses-vars": "warn",
      // "react/react-in-jsx-scope": "on", // 配合 JSX Runtime
      // 通用规则
      "no-unused-vars": "off",
      "no-unused-expressions": ["error", {
        "allowShortCircuit": true,
        "allowTernary": true
      }]
      // "no-console": "warn",
      //"@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    ignores: ["&zwnj;**/dist", "**&zwnj;/node_modules"],
  },
  prettierConfig,
];
