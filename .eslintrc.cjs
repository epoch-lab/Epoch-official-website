module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '19.0' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src']
      },
      alias: {
        map: [
          ['@', './src'],
          ['@utils', './src/utils'],
          ['@content', './src/content'],
          ['@tailwind', './src/tailwind'],
          ['@ts-default', './src/ts-default'],
          ['@ts-tailwind', './src/ts-tailwind']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  },
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // 未定义变量（使用了但未声明/未引入）
    'no-undef': 'error',

    // 未使用变量与导入
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ],

    // 路径/包解析失败（拼写错误或未安装依赖）
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }]
  }
};
