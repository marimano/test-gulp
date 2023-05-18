
const minify = require('gulp-minify');
const inject = require('gulp-inject-string');

const iife = require('gulp-iife');
const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function scripts() {
  return gulp.src('client/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env'],
      sourceType: 'module'
    }))
    .pipe(iife({
      useStrict: false,
    }))
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('gulp-dist'));
}

function copyHtml() {
  return gulp.src('client/index.html')
    .pipe(minify())
    .pipe(gulp.dest('gulp-dist'))
}

function bundleCss() {
  return gulp.src('client/**/*.css')
    .pipe(minify())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('gulp-dist'))
}

function injectCssJs() {
  return gulp.src('gulp-dist/index.html')
    .pipe(inject.before('</body>', '<script src="bundle.min.js"></script>\n'))
    .pipe(inject.before('</head>', '<link rel="stylesheet" href="bundle.css">\n'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('gulp-dist'));
}

exports.copyHtml = copyHtml;
exports.bundleCss = bundleCss;
exports.scripts = scripts
//exports.browserifyTask = browserifyTask;
exports.default = gulp.series(gulp.parallel(copyHtml, bundleCss, gulp.series(scripts)), injectCssJs);