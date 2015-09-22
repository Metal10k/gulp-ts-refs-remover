# gulp-ts-refs-remover

When generating .d.ts files for node module export, ///<references ... tags are generated. These may collide with other references in your program. This simple task will remove these from your pipeline.

##### A sample of a gulpfile:
```
var gulp = require("gulp");
var ts = require("gulp-typescript");
var remover = require("gulp-ts-refs-remover");

gulp.task("default", function () {
	var tsResult =
		gulp
			.src("src/**/*.ts")
			.pipe(
				ts({
					...
				}));

	tsResult.dts
		.pipe(remover())
		.pipe(gulp.dest("dist"));
	return tsResult
		.js
		.pipe(gulp.dest("dist"));
});

```