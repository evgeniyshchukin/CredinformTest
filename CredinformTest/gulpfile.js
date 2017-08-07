/// <binding ProjectOpened='htmlhint, stylelint' />
'use strict';
var gulp = require('gulp');
var doiuse = require('doiuse');
var htmlhint = require('gulp-htmlhint');
var webpack = require('gulp-webpack');
var stylelint = require('gulp-stylelint');
var reporter = require('postcss-reporter');
var run = require('run-sequence');


gulp.task('webpack', function () {
    return gulp.src('Content/blocks/home/home.js')
        .pipe(webpack())
        .pipe(gulp.dest('Scripts/'));
});

gulp.task('htmlhint', function () {
    return gulp.src('Views/*.cshtml')
      .pipe(htmlhint.reporter());
});

gulp.task('stylelint', function () {
    return gulp.src('css/*.css')
        .pipe(stylelint({                                      //проверка стилевых файлов
            reporters: [
                { formatter: 'string', console: true }          //оповещение об ошибках в окне ошибок
            ]
        }));
});


gulp.task("build", function (fn) {                          //порядок выполнения задач
    run(
        "stylelint",
        "htmlhint",
        "webpack",
        fn
    );
});
//gulp.task('symbols', function () {
//    return gulp.src('Content/img/*.svg')           
//        .pipe(svgmin())
//        .pipe(svgstore({
//            inlineSvg: true
//        }))
//        .pipe(rename('sprite.svg'))
//        .pipe(gulp.dest('Images/svg/'));
//});





// gulp.task('bemlinter', function () {
//     gulp.src('less/style.less')
//         .pipe(postcss([
//             (bemLinter({
//                 present: 'bem',
//                 presetOptions: { namespace: 'ydx' }
//             })),
//            (reporter())
//         ]))
//
// });


// gulp.task('precss', function () {
//     gulp.src("build/css/style.css")
//         .pipe(postcss([
//             precss
//         ]))
//         .pipe(gulp.dest("build/css/style.css"));
// });

