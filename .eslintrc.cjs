module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/semi": "error"
    }
};