let mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .js('src/js/app.js', 'js')
    .sass('src/sass/app.scss', 'css')
    .copyDirectory('src/img', 'dist/img')
    .version()
    .sourceMaps();
