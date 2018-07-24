# ZOOM.JS

A pure JavaScript image zooming plugin with scrset support; as seen on
[Medium.com](https://medium.com/designing-medium/image-zoom-on-medium-24d146fc0c20).

Has no jQuery or Bootstrap dependencies.

Has srcset support.

Original version by @fat: <https://github.com/fat/zoom.js>.
This is a port of the npm version by @nishanths: <https://github.com/nishanths/zoom.js>.

https://htmlpreview.github.io/?https://github.com/willemvb/zoom.js/blob/master/index.html

## Usage

You can use zoom.js directly as a script, or install via [yarn](https://github.com/willmvb/zoom.js).

### Direct

1. Link the zoom.js and zoom.css files to your site or application.

  ```html
  <link href="css/zoom.css" rel="stylesheet">
  <script src="dist/zoom.js"></script>
  ```

2. Add a `data-action="zoom"` attribute to the images you want to make
   zoomable. For example:

  ```html
  <img src="img/blog_post_featured.png" data-action="zoom">
  ```

### Via yarn

1. Install the package: `yarn https://github.com/willmvb/zoom.js`
1. Link the zoom.css file to your application.

  ```html
   <link href="css/zoom.css" rel="stylesheet">
   ```

1. Import the package and call `zoom.setup(elem)` for each image you want to
   make zoomable.

  ```js
  import { zoom } from "@willemvb/zoom.js";

  var imgElem = new Image();
  imgElem.src = "tree.png";
  document.body.appendChild(imgElem);

  zoom.setup(imgElem);
  ```

## Demo

https://htmlpreview.github.io/?https://github.com/willemvb/zoom.js/blob/master/index.html

First image has a standard `src`, second one uses `srcset`.

## Notes

It has the same behavior and all the features from the original implementation. But:

```
* It has srcset support
```

## License

[Original license](https://raw.githubusercontent.com/fat/zoom.js/master/MIT-LICENSE.txt)

This is a fork of the original zoom.js implementation by @fat.
Copyrights for the original project are held by @fat and Nishanth Shanmugham.

Copyright (c) 2013 @fat
The MIT License.
Copyright © 2016 Nishanth Shanmugham.
