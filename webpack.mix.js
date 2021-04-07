let mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .js('src/js/app.js', 'js')
    .options({
        postCss: [
            require('autoprefixer')({
                overrideBrowserslist: ['last 4 versions'],
                grid: true
            }),
        ]
    })
    .sass('src/sass/app.scss', 'css')

    // .postCss('src/sass/app.scss', 'css', [
    //     require('autoprefixer')({
    //         browsers: ['last 40 versions'],
    //         grid: true
    //     })
    // ])
    .copyDirectory('src/img', 'dist/img');
