require-es6
====

When writing modules that contain es6 code compiled and published to es5, you want a way to run the es6 code and not the es5 code.  
If you add a `main-es6` prop to the package.json then this will use the es6 version.


Example Case:

### module1/package.json:
```js
	"main": "src/es5/index.js",
	"main-es6": "src/es6/index.js"
```

### module1/gulpfile.js snippet
```js
gulp.src('src/es6/**/*.js')
  .pipe(traceur())
  .pipe(insert.prepend("require('traceur/bin/traceur-runtime');\n"))
  .pipe(gulp.dest('src/es5'))
```

---

### module2/index.js
```js
var require = require('require-es6');
var module1 = require('module1');
```