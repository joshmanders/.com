const { series, watch, src, dest, parallel } = require('gulp');
const pump = require('pump');

// gulp plugins and utils
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify');
var beeper = require('beeper');

// postcss plugins
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');

function serve(done) {
  livereload.listen();
  done();
}

const handleError = (done) => {
  return function (err) {
    if (err) {
      beeper();
    }
    return done(err);
  };
};

function hbs(done) {
  pump(
    [src(['content/themes/joshmanders/*.hbs', 'content/themes/joshmanders/**/**/*.hbs']), livereload()],
    handleError(done)
  );
}

function css(done) {
  var processors = [nested(), tailwindcss(), autoprefixer()];

  pump(
    [
      src('content/themes/joshmanders/tailwind.css', { sourcemaps: true }),
      postcss(processors),
      dest('content/themes/joshmanders/assets/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  );
}

function js(done) {
  pump(
    [
      src('content/themes/joshmanders/main.js', { sourcemaps: true }),
      uglify(),
      dest('content/themes/joshmanders/assets/', { sourcemaps: '.' }),
      livereload(),
    ],
    handleError(done)
  );
}

function zipper(done) {
  var themeName = require('./content/themes/joshmanders/package.json').name;
  var filename = themeName + '.zip';

  pump(
    [
      src(['content/themes/joshmanders/**', '!content/themes/joshmanders/dist', '!content/themes/joshmanders/dist/**']),
      zip(filename),
      dest('./'),
    ],
    handleError(done)
  );
}

const cssWatcher = () => watch(['tailwind.config.js', 'content/themes/joshmanders/tailwind.css'], css);
const hbsWatcher = () => watch(['content/themes/joshmanders/*.hbs', 'content/themes/joshmanders/**/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher);
const build = series(css, js);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
