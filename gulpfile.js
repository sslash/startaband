var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');  
var concat = require('gulp-concat');  
var styl = require('gulp-styl');  
var refresh = require('gulp-livereload');  
var lr = require('tiny-lr');  
var server = lr();

gulp.task('scripts', function() {  
	gulp.src(['public/js/**/*.js'])
	.pipe(browserify())
	.pipe(concat('public/dist/dest.js'))
	.pipe(gulp.dest('build'))
	.pipe(refresh(server))
})

gulp.task('sass', function () {
	gulp.src('public/css/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/css/dist'));
});

gulp.task('styles', function() {  
	gulp.src(['public/css/dist/*.css'])
	.pipe(styl({compress : true}))
	.pipe(gulp.dest('public/dist/build'))
	.pipe(refresh(server))
})

gulp.task('lr-server', function() {  
	server.listen(35729, function(err) {
		if(err) return console.log(err);
	});
})

gulp.task('default', function() {  
	gulp.run('lr-server', 'scripts', 'sass', 'styles');

	gulp.watch('public/js/**', function(event) {
		gulp.run('scripts');
	})

	gulp.watch('public/css/**', function(event) {
		gulp.run('styles');
	})
})