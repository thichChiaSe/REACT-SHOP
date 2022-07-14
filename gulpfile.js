var gulp = require("gulp");
gulp.task("default", function () {
  console.log("Hello Gulp!");
});
var print = require("gulp-print");
const { EventEmitter } = require("stream");

gulp.task("message", function () {
  return gulp.src("package.json").pipe(
    print(function () {
      return "HTTP Server Started";
    })
  );
});
gulp.task("message", function () {
  return new Promise(function (resolve, reject) {
    console.log("HTTP Server Started");
    resolve();
  });
});
gulp.task("message", async function () {
  console.log("HTTP Server Started");
});
gulp.task("message", function (done) {
  console.log("HTTP Server Started");
  done();
});
var spawn = require("child_process").spawn;

gulp.task("message", function () {
  return spawn("echo", ["HTTP", "Server", "Started"], { stdio: "inherit" });
});
var of = require("rxjs").of;

gulp.task("message", function () {
  var o = of("HTTP Server Started");
  o.subscribe(function (msg) {
    console.log(msg);
  });
  return o;
});
gulp.task("message3", function () {
  var e = new EventEmitter();
  e.on("msg", function (msg) {
    console.log(msg);
  });
  setTimeout(() => {
    e.emit("msg", "HTTP Server Started");
    e.emit("finish");
  });
  return e;
});
