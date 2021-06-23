const { series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  return src("./src/styles/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest("./dist/lib"));
}

function copyfont() {
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./dist/lib/fonts"));
}

exports.build = series(compile, copyfont);
