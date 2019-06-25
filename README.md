# trunky - Basic truncation and string tools

[![build status](https://secure.travis-ci.org/serby/trunky.png)](http://travis-ci.org/serby/trunky)

This package is no longer maintained, use [ellipsize](https://www.npmjs.com/package/ellipsize)

## Installation

    npm install trunky

## Usage

```js
var truncate = require('trunky').truncateWithEllipsis;

truncate('Hello world', 8); // Hello…
truncate('<b>Hello</b> world', 8); // Hello…
```

**Note:** the unicode character `…` (`\u2026`) is used by default. If your application does not support unicode or you would prefer a different ellipsis character, `truncate()` takes an optional third argument which is the string to use:

```js
truncate('Hello world', 8, '...'); // Hello...
truncate('Hello world', 8, ' etc.'); // Hello etc.
```

## Credits
[Paul Serby](https://github.com/serby/) follow me on [twitter](http://twitter.com/serby)

## Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
