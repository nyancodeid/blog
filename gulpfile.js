const { series, src, dest } = require('gulp');
const replacement = require('gulp-replace');
const debug = require('gulp-debug');

function transpile() {
  return src(['dist/**/*.html'])
    .pipe(replacement('/assets/', 'https://cdn.statically.io/gh/nyancodeid/blog/gh-pages/assets/'))
    .pipe(debug({title: 'debug-transpile:'}))
    .pipe(dest('dist'))
}

function css () {
  return src(['dist/assets/css/*.css'])
    .pipe(replacement('/assets/', 'https://cdn.statically.io/gh/nyancodeid/blog/gh-pages/assets/'))
    .pipe(debug({title: 'debug-css:'}))
    .pipe(dest('dist/assets/css'))
}

exports.default = series(transpile, css)