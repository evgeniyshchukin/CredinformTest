/// <binding BeforeBuild='clean, style, html:copy, copy, html:update, images, spritesmith, symbols, normalize' AfterBuild='copy, html:copy, html:update, images, spritesmith, symbols' ProjectOpened='htmlhint, stylelint' />
'use strict';
var gulp = require('gulp');
var doiuse = require('doiuse');
var htmlhint = require('gulp-htmlhint');
var stylelint = require('gulp-stylelint');
var reporter = require('postcss-reporter');
var run = require('run-sequence');
var del = require('del');


gulp.task("htmlhint", function () {
    return gulp.src('*.html')
      .pipe(htmlhint('.htmlhintrc'))                             //валидатор
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
