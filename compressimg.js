const imagemin = require('gulp-imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const gulp = require('gulp');
const image = require('gulp-image');
 
// imagemin(['images/*.{jpg,png}'], 'build/images', {
//     plugins: [
//         imageminJpegtran(),
//         imageminPngquant({quality: '65-80'})
//     ]
// }).then(files => {
//     console.log(files);
//     //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …] 
// });

// gulp.task('images', function () {
//   gulp.src('images/*')
//     .pipe(image({
//       pngquant: true,
//       optipng: false,
//       zopflipng: true,
//       jpegRecompress: false,
//       mozjpeg: true,
//       guetzli: false,
//       gifsicle: true,
//       svgo: true,
//       concurrent: 10
//     }))
//     .pipe(gulp.dest('build/img'))
//     .on('end', function() { console.log("Task Done!") })
//     .on('error', function(){console.log('error')} );
// });


gulp.task('images', function() {
  return gulp.src(['images/*'])
    // Pass in options to the task 
    .pipe(imagemin([
                    imagemin.jpegtran({progressive: true}),
                    imagemin.optipng({optimizationLevel: 5})
                  ])
          )
    .pipe(gulp.dest('build/img'))
    .on('end', function() { console.log("Task Done!") });
});


gulp.task('default', ['images']);
