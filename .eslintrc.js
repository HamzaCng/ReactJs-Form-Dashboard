module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'react-app', 
        'react-app/jest',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'eqeqeq': 'off', // === yerine == kullanabilmek için. 
        //(Datalistleri kullanırke biri servisten dönmekte biri tanımladığımız constantardan gelmekte bu yüzden instance'ları uyuşmamakta.)
    },
};

