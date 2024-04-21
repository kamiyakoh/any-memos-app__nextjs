module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'standard-with-typescript', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'prettier', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // 組み込みモジュール
          'external', // npmでインストールした外部ライブラリ
          'internal', // 自作モジュール
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always', // グループ毎にで改行を入れる
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc', // 昇順にソート
          caseInsensitive: true, // 小文字大文字を区別する
        },
        pathGroups: [
          // 指定した順番にソートされる
          {
            pattern: '@/components/',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'off',
  },
  ignorePatterns: [
    'build/',
    'src--jsx/',
    'public/',
    '**/node_modules/',
    '*.config.js',
    '.*lintrc.js',
    'old-src/',
    '/*.*',
  ],
};
