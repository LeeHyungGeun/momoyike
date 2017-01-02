const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
var devWebpackConfig = require('./configs/webpack.config.dev.js');
var bsConfig = require('./configs/bs.config.js');
var browserSync = require('browser-sync');

const path = require('path');
const $ = require('gulp-load-plugins');
var port = 9090;
var config;

gulp.task('dev', function() {
    new WebpackDevServer(webpack(devWebpackConfig), {
        // Dev Server Options
        hot: true,
        compress: true,
        inline: true,
        contentBase: __dirname,
        publicPath: '/dist/'
        // proxy: [{
        //     path: ['/rest/**'],
        //     target: 'http://localhost/'
        // }]
    })
    .listen(port, 'localhost', function(err) {
        if (err) {
            throw new $.util.PluginError('webpack-dev-server', err);
            $.util.log('[webpack-dev-server]', 'http://localhost:' + port + '/webpack-dev-server/index.html');
        }
        else {
            bsServer();
        }
    })
});
function bsServer(){
    browserSync(bsConfig);
}