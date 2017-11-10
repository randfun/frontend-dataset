[![Build Status](https://travis-ci.org/randfun/frontend-dataset.svg?branch=master)](https://travis-ci.org/randfun/frontend-dataset)

# Frontend Dataset

This dataset includes a set of CSS Properties and HTML Tags.


## Installation

This project is distributed through [NPM](https://npmjs.com). You can install it running the next command:

```
npm install --save frontend-dataset
```

This project exports an object with two datasets:

```node
const dataset = require('frontend-dataset');
/*
 * {
 *   css: [...],
 *   html: [...],
 * }
 */


dataset.css
/*
 * [
 *   "animation",
 *   "animation-delay",
 *   "animation-direction",
 *   ...
 * ]
 */

dataset.html
/*
 * [
 *   "a",
 *   "abbr",
 *   "acronym",
 *   ...
 * ]
 */
```

## ToDo

- [ ] Add JavaScript Classes
- [ ] Add CSS Frameworks
- [ ] Add JS Frameworks

## License

This project is released under the [Apache-2.0 license](https://github.com/Angelmmiguel/frontend-dataset/blob/master/LICENSE). By [Angel](https://twitter.com/laux_es)
