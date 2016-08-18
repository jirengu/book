/*
	gulpfile.js
 */

var gulp = require('gulp'),
	shell = require('gulp-shell');


gulp.task('build', shell.task(['npm run build']));

gulp.task('defalut', function(){
	gulp.watch('**/*.md', ['build']);
});