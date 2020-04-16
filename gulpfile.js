var gulp = require('gulp'),
	//Js
	babel = require('gulp-babel');
	uglify = require('gulp-uglify'),
	filesJs = './resources/*.js',
	outputJs = './assets',
	//Sass
	sass = require('gulp-sass'),
	filesCss = './resources/**/*.+(scss|sass)',
	outputCss = './assets';
//Html
// htmlmin = require('gulp-htmlmin'),
// filesHtml = './SD/html/*.html',
// outputHtml = './html';
const {
	watch
} = require('gulp');

//Uglify
gulp.task('uglify', function () {
	gulp.src(filesJs)
		.pipe(babel({presets: ['@babel/preset-env']}))
		.pipe(uglify())
		.pipe(gulp.dest(outputJs));
});

const watcherJS = watch([filesJs]);
watcherJS.on('change', function (path, stats) {
	console.log(`File ${path} was changed`);
	return gulp.watch(filesJs, gulp.series('uglify'));
});

//Sass
gulp.task('sass', function () {
	return gulp.src(filesCss)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest(outputCss));
});

const watcherCSS = watch([filesCss]);
watcherCSS.on('change', function (path, stats) {
	console.log(`File ${path} was changed`);
	return gulp.watch(filesCss, gulp.series('sass'));
});

//Minify
// gulp.task('minify', function() {
//   return gulp.src(filesHtml)
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(htmlmin({
//       removeComments: true
//     }))
//     .pipe(gulp.dest(outputHtml));
// });

// const watcherHtml = watch([filesHtml]);
// watcherHtml.on('change', function(path, stats) {
//   //console.log(`File ${path} was changed`);
//   return gulp.watch(filesHtml, gulp.series('minify'));
// });

//Run/Watch
gulp.task('default', gulp.parallel('uglify', 'sass'));
