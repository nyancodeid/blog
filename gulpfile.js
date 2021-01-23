const { series, src, dest } = require('gulp');
const replacement = require('gulp-replace');
const debug = require('gulp-debug');

function transpile() {
  return src(['dist/**/*.html', 'dist/assets/css/*.css'])
    .pipe(replacement('/assets/', 'https://cdn.statically.io/gh/nyancodeid/blog/gh-pages/assets/'))
    .pipe(debug({title: 'debug:'}))
    .pipe(dest('dist'))
}

exports.default = series(transpile)