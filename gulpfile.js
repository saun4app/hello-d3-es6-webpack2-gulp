var gulp = require('gulp');
var gulp_rename = require('gulp-rename');
var webpack_stream = require('webpack-stream');
var webpack2 = require('webpack');

gulp.task('default', function() {
    var entry_point = 'demo/demo.js';
    var output_file = 'browser_bundle.js';
    var dest_path = 'demo';

    return gulp.src(entry_point)
        .pipe(webpack_stream({}, webpack2))
        .pipe(gulp_rename(output_file))
        .pipe(gulp.dest(dest_path));
});
