const path = require('path');
module.exports = {
    proxy: 'localhost:9090',
    host: 'localhost',
    open: 'external',
    port: '9000',
    baseDir: '/',
    browser: ['chrome'],
    index: path.resolve(__dirname, '../app/index.html'),
    files: [
        path.resolve(__dirname, '../app/**/*.*')
    ],
    ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: '[BS]',
    notify: true,
    reloadDelay: 1
};