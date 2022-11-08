const config = {
    env: {
        browser: true,
        'react-native/react-native': true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        ecmafeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-raw-text': 2,
        'object-curly-spacing': ['error', 'always'],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                allowSeparatedGroups: false,
            },
        ],
    },
    plugins: ['react', 'react-native'],
}

module.exports = config
