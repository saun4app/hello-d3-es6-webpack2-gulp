# hello-d3-es6-webpack2-gulp
`hello-d3-es6-webpack2-gulp` shows an example of using `webpack 2` and `gulp` to create a browser ready JavaScript file (`browser_bundle.js`) from a ES6 class.  

<style>
td { valign:top; }
</style>

<table>
<tr>
<td valign="top">ES6 Code
<ul>
<li>app/d3_circle.js</li>
<li>demo/demo.js</li>
</ul>
</td>
<td> ==> </td>
<td valign="top">Browser-ready JavaScript
<ul><li>demo/browser_bundle.js</li></ul>
</td>
</tr>
</table>


## Installation

### `npm` global
```
npm install -g http-server
```

### Clone `hello-d3-es6-webpack2-gulp` into `d3-demo` directory
```
git clone https://github.com/saun4app/hello-d3-es6-webpack2-gulp.git d3-demo
```

or

### Create the code manually

```
mkdir d3-demo
cd d3-demo
npm init -y
npm install --save -D gulp gulp-rename webpack webpack-stream
npm install --save d3
```

#### Create Srouce Code
`app/d3_circle.js`, `demo/demo.js`, `demo/index.html`, see directory structure and file content below.

### Create Browser-ready Javascfipt file
```bash
gulp
```

### Start the server from `demo` directory
```bash
http-server
```
`http-server` provided URL should display a circle:
<div>
<img src="https://rawgit.com/saun4app/hello-d3-es6-webpack2-gulp/master/circle.svg">
</div>

### Directory Structure
```
d3-demo
├── app
│   └── d3_circle.js
├── demo
│   ├── browser_bundle.js
│   ├── demo.js
│   └── index.html
├── node_modules
├── gulpfile.js
```

### JavaScript and HTML Files

**app/d3_circle.js**

```javascript
import * as d3 from 'd3';

export class D3Circle {
    draw(container_id) {
        d3.select('#' + container_id)
            .append('svg')
            .attr('width', 250)
            .attr('height', 250)
            .append('circle')
            .attr('cx', 125)
            .attr('cy', 125)
            .attr('r', 30)
            .attr('fill', 'blue')
    }
}

```

**demo/demo.js**

```javascript
import { D3Circle } from '../app/d3_circle.js';

var chart_obj = new D3Circle();
chart_obj.draw('el_chart');
```

**demo/index.html**

```html
<html>
<head>
    <title>d3 demo ES6 webpack 2 </title>
    <script src='browser_bundle.js'></script>    
</head>
<body>
    <div id='el_chart'></div>
</body>
</html>
```

**gulpfile.js**

```javascript
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
```

Webpack 2 terminology
- `demo/demo.js` is the <a href="https://webpack.js.org/concepts/entry-points" target="_black">**entry point**</a>
- `demo/browser_bundle.js` is the <a href="https://webpack.js.org/concepts/output" target="_black">**entry output**</a>


## Resources
- https://webpack.js.org/guides/get-started
- https://webpack.js.org/concepts/entry-points
- https://webpack.js.org/concepts/output
- https://www.npmjs.com/package/http-server
