module.exports = {
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: [
        'node_modules/'
    ],
    watch: [
        'server.js',
        'gulpfile.js',
        'config/**/*.js',
        'index.html'
    ],
    stdout: false,
    readable: false
};