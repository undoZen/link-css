# insert-css

insert a `<link>` of css into the `<head>`

# example

``` js
var fs = require('fs');
var linkCss = require('link-css');
linkCss('/style.css');
```

In the page which used this script after bundled by browserify, it will have a `<link>` tag which load the `/style.css` into the page.

You can use [css-linkify](https://www.npmjs.org/package/css-linkify) if you like to `require('./style.css')` directly.
