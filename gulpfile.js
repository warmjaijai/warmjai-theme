var elixir = require('laravel-elixir');

require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/warmjai-theme/assets/';

elixir.config.publicPath = 'themes/warmjai-theme/assets/compiled/';

elixir(function(mix){
	mix.sass([
		'style.scss'
	])
	.scripts([
		'app.js',
		'default.js'
	]);
});