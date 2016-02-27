var gulp = require('gulp');
var compass = require('gulp-compass');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function (){
    return gulp.src('scss/*.scss')
    .pipe(compass({
      css:'css',
      sass:'scss',
      image: 'img',
      javascript: 'js',
      require: ['susy', 'compass-normalize', 'breakpoint']
    }))
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['last 1 version']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('images',function(){
  return gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['styles']);
});
