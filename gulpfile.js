const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

function copyHTML() {
    return gulp.src("./src/index.html")
    .pipe(gulp.dest("./dist/"))
}

function configureJS() {
    return gulp.src("./src/app.js")
    .pipe(babel({
        presets: ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/JS/"))
}


 function serve() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

     gulp.watch("./src/index.html", copyHTML);
     gulp.watch("./src/app.js", configureJS);
     gulp.watch("./src/index.html").on("change", browserSync.reload);
     gulp.watch("./src/app.js").on("change", browserSync.reload);
 }

 exports.copyHTML = copyHTML;
 exports.configureJS = configureJS;
 exports.serve = serve;
