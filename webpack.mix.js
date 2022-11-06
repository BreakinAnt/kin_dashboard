const path = require('path');
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .js('resources/adminkit/js/app.js', 'public/adminkit/js')

    .alias({
        '@adminkit': path.resolve(__dirname, 'resources/adminkit'),
        '@adminkit-components': path.resolve(__dirname, 'resources/components/adminkit')
    })
    .vue()

    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/adminkit/scss/app.scss', 'public/adminkit/css')
    .copy('resources/adminkit/img', 'public/adminkit/img')
    .copy('resources/adminkit/fonts', 'public/adminkit/fonts')
    .browserSync({
        proxy: '127.0.0.1:8000',
    })

    .disableSuccessNotifications();
