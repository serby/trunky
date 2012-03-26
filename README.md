# trunky - Basic truncation and string tools

[![build status](https://secure.travis-ci.org/serby/trunky.png)](http://travis-ci.org/serby/trunky)

## Installation

      npm install trunky

## Usage

```js

var truncate = require('trunky').truncate;

truncate('Hello world', 8); // Hello…
truncate('<b>Hello</b> world', 8); // Hello…
```

**Note:** the unicode character `…` (`\u2026`) is used by default. If your application does not support unicode, `truncate()` takes a unicode flag as the third argument:

```js
truncate('Hello world', 8, false); // Hello...
```

## Credits
[Paul Serby](https://github.com/serby/) follow me on [twitter](http://twitter.com/PabloSerbo)

## Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
