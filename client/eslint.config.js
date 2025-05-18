import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    reactHooks.configs['recommended-latest'],
    {
        name: 'react/recommended',
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                pragma: 'React',
                version: '16.4',
            },
        },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
                ...globals.browser,
                ...globals.commonjs,
            },
        },
        rules: {
            'class-methods-use-this': 'off',
            '@typescript-eslint/class-methods-use-this': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'off',
            'no-alert': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ],
        },
    },
    {
        name: 'import/custom',
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
        rules: {
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                },
            ],
            'import/prefer-default-export': 'off',
            'import/no-relative-packages': 'error',
        },
    },
);
