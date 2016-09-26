var elixir = require('laravel-elixir');
elixir.config.js.browserify.watchify = {
    enabled: true,
    options: {
        poll: true
    }
}
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir
(function (mix) {
    mix.sass('app.scss');

    mix.scripts([
        'app.js'
    ], 'public/js/app.js');
    mix.scripts([
        'controllers/globalController.js',
        'controllers/navController.js',
        'controllers/userController.js',
        'controllers/coverSheetController.js',
        'controllers/invoiceController.js',
        'controllers/filenoController.js'
    ], 'public/js/controllers.js');


    mix.scripts([
        'models/userModel.js',
        'models/coverSheetModel.js',
        'models/filenoModel.js',
        'models/invoiceModel.js'
    ], 'public/js/models.js');

    mix.version([
        'js/app.js',
        'js/models.js',
        'js/controllers.js',
    ])
});




