# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.0](https://github.com/mathiasbynens/String.fromCodePoint/compare/v0.2.1...v1.0.0) - 2020-05-21

### Merged

- [breaking] Implement the es-shim-api interface [`#5`](https://github.com/mathiasbynens/String.fromCodePoint/pull/5)

### Commits

- Use `tape` in tests and run them on every Node.js version [`ffa1982`](https://github.com/mathiasbynens/String.fromCodePoint/commit/ffa1982ed8e03ab1afeb27cda088c3b553bf5d39)
- Use HTTPS URLs where possible [`880fb77`](https://github.com/mathiasbynens/String.fromCodePoint/commit/880fb77864ecba1dd5ac32e9607ceb0f00c0028f)
- Update readme [`83e00ac`](https://github.com/mathiasbynens/String.fromCodePoint/commit/83e00ace88866c06514caafeaa47805e5305a8cc)
- Set up Coveralls [`0c77f92`](https://github.com/mathiasbynens/String.fromCodePoint/commit/0c77f924b06859ea41fdc86c77c01e06bc8ebc9d)
- Update repo config files [`2832638`](https://github.com/mathiasbynens/String.fromCodePoint/commit/2832638a336c3c4a47bb857100a618583a693e57)
- Test that it respects the es-shim-api interface [`34e9060`](https://github.com/mathiasbynens/String.fromCodePoint/commit/34e90607fecb5736e52826046e1bd4fea4d1197e)
- Add missing Istanbul devDependency [`54fdd4d`](https://github.com/mathiasbynens/String.fromCodePoint/commit/54fdd4d2860c48da7a736bb6c4cf7697f19f9087)

## [v0.2.1](https://github.com/mathiasbynens/String.fromCodePoint/compare/v0.2.0...v0.2.1) - 2014-07-15

### Commits

- Tag the v0.2.1 release [`c2c8570`](https://github.com/mathiasbynens/String.fromCodePoint/commit/c2c857025aca29aeebab66caedf4a56dac58ba52)
- Make `String.fromCodePoint.length` equal `1` as per the latest draft [`64774a2`](https://github.com/mathiasbynens/String.fromCodePoint/commit/64774a2a3b542ce77ff3ca36bec029f1cbc7eac0)
- Add some tests that were suggested by @arv [`396674f`](https://github.com/mathiasbynens/String.fromCodePoint/commit/396674f457ee4c0729f1f68e1df5514bd28e32e0)

## [v0.2.0](https://github.com/mathiasbynens/String.fromCodePoint/compare/v0.1.0...v0.2.0) - 2014-04-10

### Fixed

- Avoid `RangeError`s due to maximum call stack size [`#1`](https://github.com/mathiasbynens/String.fromCodePoint/issues/1)

### Commits

- Simplify tests [`177fc9f`](https://github.com/mathiasbynens/String.fromCodePoint/commit/177fc9f599f9892ec1be92545bd32fdaafc641e6)
- Make the `fromCodePoint` property non-enumerable [`d635a7c`](https://github.com/mathiasbynens/String.fromCodePoint/commit/d635a7ca3537fed954bd19a7b299ed62376dbc59)
- Add a few tests [`d3098dc`](https://github.com/mathiasbynens/String.fromCodePoint/commit/d3098dc6bf2e5b28f79df15c87e887667fa653c9)
- Avoid IE8’s broken `Object.defineProperty` [`23ee503`](https://github.com/mathiasbynens/String.fromCodePoint/commit/23ee50349f1e2acb9e4c643f0d3339adce3e91ef)
- Tag the v0.2.0 release [`2a010ab`](https://github.com/mathiasbynens/String.fromCodePoint/commit/2a010ab5021948a7c16a0391e7539cccfd793827)
- README: Explicitly request SVG badges [`31b41b3`](https://github.com/mathiasbynens/String.fromCodePoint/commit/31b41b3fcb004662975cf090e9e062696d79a2c9)
- Add some more tests [`dd1ca34`](https://github.com/mathiasbynens/String.fromCodePoint/commit/dd1ca34a4d8124c59a8e13b1e4c95aba462162ec)
- README: Add link to `String.prototype.codePointAt` polyfill [`7dc1b58`](https://github.com/mathiasbynens/String.fromCodePoint/commit/7dc1b584d3989d36563ba5d7daee9a7c2130b076)
- Add test for `-0` [`02764aa`](https://github.com/mathiasbynens/String.fromCodePoint/commit/02764aa01da52080d4d72d93f1616a99bb34005f)
- README: Tweak `require` instructions [`57bc578`](https://github.com/mathiasbynens/String.fromCodePoint/commit/57bc57850bb15569e48dced67442fd2ad877a4fa)
- README: Mention Mozilla [`02c8ae5`](https://github.com/mathiasbynens/String.fromCodePoint/commit/02c8ae5b5a43ecd8fd18b95edd1344b3f6ed1017)
- README: Update link to ES6 draft [`579503e`](https://github.com/mathiasbynens/String.fromCodePoint/commit/579503eaaf3298756400ff2eac6f6296e3a28c88)
- README: Update link [`a018a18`](https://github.com/mathiasbynens/String.fromCodePoint/commit/a018a187499e0249636e64f59582ba4c101f4784)
- README: Link to @paulmillr’s es6-shim [`5034e15`](https://github.com/mathiasbynens/String.fromCodePoint/commit/5034e15e89282908281a2575b859e7dcf6098539)

## v0.1.0 - 2013-09-20

### Commits

- Initial commit [`3976b0f`](https://github.com/mathiasbynens/String.fromCodePoint/commit/3976b0fd561c4550d838c05fabff6ee285a6719c)
- Add MIT license [`9ebc636`](https://github.com/mathiasbynens/String.fromCodePoint/commit/9ebc636656710f1f435d2d2c7db569f588728d7b)
- Rename `codePoints` into `codeUnits` as that’s more accurate [`7d205c2`](https://github.com/mathiasbynens/String.fromCodePoint/commit/7d205c23898be8b57f6c86616f8b87ee96f439b7)
- README: Add build status badge [`600e00d`](https://github.com/mathiasbynens/String.fromCodePoint/commit/600e00d50202ce4237ffa3b37927d8c53c7af01a)
- README: Tweak description [`35256b6`](https://github.com/mathiasbynens/String.fromCodePoint/commit/35256b631209d8eb337261d7438438fe7787ceb9)
- Add header comment [`82b9e22`](https://github.com/mathiasbynens/String.fromCodePoint/commit/82b9e222df74ed57cec43cb186ba3c0bb9494902)
