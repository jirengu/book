/*
	gulpfile.js
 */

var gulp = require('gulp'),
	shell = require('gulp-shell');


gulp.task('default', shell.task(['git add .', 'git commit -am "auto commit"', 'git push -u origin master']));

gulp.task('watch', function(){
	gulp.watch('**/*.md', ['default']);
});