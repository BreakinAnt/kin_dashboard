const path = require('path')
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/adminkit/js/app.js', 'public/adminkit/js')
    .alias({
        '@adminkit': path.resolve(__dirname, 'resources/adminkit'),
        '@adminkit-components': path.resolve(__dirname, 'resources/components/adminkit')
    })
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/adminkit/scss/app.scss', 'public/adminkit/css')
    .disableSuccessNotifications()
    .copy('resources/adminkit/img', 'public/adminkit/img')
    .copy('resources/adminkit/fonts', 'public/adminkit/fonts')
    .browserSync({
        proxy: "127.0.0.1:8000"
    });
