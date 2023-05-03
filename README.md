# ES6 `String.fromCodePoint` polyfill [![string.fromcodepoint on npm](https://img.shields.io/npm/v/string.fromcodepoint)](https://www.npmjs.com/package/string.fromcodepoint)

An robust & optimized polyfill for [the `String.fromCodePoint` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.fromcodepoint).

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.fromcodepoint).

Other polyfills for `String.fromCodePoint` are available:

* <http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/#String> by [Norbert Lindenberg](http://norbertlindenberg.com/) (passes all tests)
* <https://gist.github.com/slevithan/2290602> by [Steven Levithan](http://stevenlevithan.com/) (fails 8 tests)
* <https://github.com/paulmillr/es6-shim/blob/771e98e789292706d2435e4e10ffbe45edf40da6/es6-shim.js#L63-L83> by [Paul Miller](http://paulmillr.com/) (passes all tests)

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install string.fromcodepoint
```

Then, in [Node.js](http://nodejs.org/):

```js
var fromCodePoint = require('string.fromcodepoint');
```

In a browser:

```html
<script src="https://bundle.run/string.fromcodepoint"></script>
```

> **NOTE**: It's recommended that you install this module using a package manager
> such as `npm`, because loading multiple polyfills from a CDN (such as `bundle.run`)
> will lead to duplicated code.


## Notes

[A polyfill + test suite for `String.prototype.codePointAt`](https://mths.be/codepointat) is available, too.

The tests for this repository [are now used by Mozilla](http://hg.mozilla.org/integration/mozilla-inbound/rev/2411714cd058), to help ensure their native `String.fromCodePoint` implementation is correct.

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](https://mths.be/mit) license.
