var { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var csso = require('gulp-csso');
var include = require('gulp-file-include');
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var del = require('del');
const htmlmin = require('gulp-htmlmin');
var sync = require('browser-sync').create();

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist'))

}
function css() {
    return src('src/scss/**.css')
        .pipe(dest('./dist/css'))

}
function js(){
    return src('src/js/**.js')
        .pipe(dest('./dist/js'))
}
function fonts(){
    return src('src/fonts/**')
        .pipe(dest('./dist/fonts'))
}
function img(){
    return src('src/img/**')
        .pipe(dest('./dist/img'))
}
function clear() {
    return del('dist')
}
function serve() {
    sync.init({
        server: './dist'
    })
    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
    watch('src/js/**.js', series(js)).on('change', sync.reload)
    watch('src/fonts/**', series(fonts)).on('change', sync.reload)
    watch('src/img/**', series(img)).on('change', sync.reload)
    watch('src/scss/**.css', series(css)).on('change', sync.reload)
}

exports.build = series(clear, scss, html,js,fonts,img,css)
exports.serve = series(clear, scss, html,js,fonts,img,css,serve)
exports.clear = clear 