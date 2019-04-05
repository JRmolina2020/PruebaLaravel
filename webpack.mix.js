let mix = require('laravel-mix');

mix.scripts([
   'resources/assets/js/jquery.min.js',
   'resources/assets/js/bootstrap.min.js',
   'resources/assets/js/vue.js',
   'resources/assets/js/axios.js',
   'resources/assets/js/vuelidate.min.js',
   'resources/assets/js/validators.min.js',
   'resources/assets/js/app.js',
   'resources/assets/js/sweetalert2.js',
   ],'public/js/app.js').styles([
      'resources/assets/css/bootstrap.min.css',
      'resources/assets/css/template.css',
   ],'public/css/app.css')
