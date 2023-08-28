import path from 'path';
import { fileURLToPath } from 'url';
import babelParser from '@babel/eslint-parser';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

// until all plugins migrate to flat config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

export default [
    {
        ignores: ['build/*'],
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    },
    js.configs.recommended,
    // until all plugins migrate to flat config
    ...compat.config({
        extends: [
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
            'plugin:react-redux/recommended',
            'plugin:jsx-a11y/recommended',
            'plugin:import/recommended',
            'plugin:@conarti/feature-sliced/recommended',
        ],
        plugins: [
            'react',
            'react-hooks',
            'react-redux',
            'jsx-a11y',
            'import',
            '@conarti/feature-sliced',
        ],
    }),
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: babelParser,
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
            // until eslint-plugin-import fix #2829 issue
            'import/parsers': {
                '@babel/eslint-parser': ['.js', '.jsx', '.cjs', '.mjs'],
            },
            'import/resolver': {
                node: {
                    extensions: ['.jsx', '.js', '.cjs', '.mjs'],
                    paths: ['src'],
                },
            },
        },
    },
    prettierConfig,
];
