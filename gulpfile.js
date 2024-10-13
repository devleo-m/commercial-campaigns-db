const uglifyes = require('uglify-es')
const uglifycomposer = require('gulp-uglify/composer')
const gulp = require('gulp')

const uglify = uglifycomposer(uglifyes, console)

gulp.task('minify', function () {
    return gulp.src('out/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('out'))
});
