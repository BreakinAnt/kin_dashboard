const path = require('path');
const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .js('resources/adminkit/assets/js/app.js', 'public/adminkit/assets/js')
  .vue({
    version: 3,
  })

  .alias({
    '@adminkit': path.resolve(__dirname, 'resources/adminkit'),
  })

  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/adminkit/assets/scss/app.scss', 'public/adminkit/assets/css')

  .copy('resources/adminkit/assets/img', 'public/adminkit/assets/img')

  .browserSync({
    proxy: '127.0.0.1:8000',
  })

  .disableSuccessNotifications();
