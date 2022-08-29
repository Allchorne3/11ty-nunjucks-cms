const { styles } = require('laravel-mix')
let mix = require('laravel-mix')

mix
    // Directories
    .copyDirectory('./src/admin', 'public/admin')
    .copyDirectory('./src/assets', 'public/assets')

    // JavaScript
    .js('src/scripts/app.js', 'public/scripts').setPublicPath('public')

    // CSS
    .css('src/style/style.css', 'style')
