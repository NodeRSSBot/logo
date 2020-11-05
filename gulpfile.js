const gulp = require('gulp');
const svgo = require('gulp-svgo');

gulp.task('default', () => {
    return gulp.src('src/*.svg')
    .pipe(svgo())
    .pipe(gulp.dest('dist'))
})