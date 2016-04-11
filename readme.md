# words-only

> Remove anything that isn't a word or letter from a string.

[![Build Status](https://travis-ci.org/radiovisual/words-only.svg?branch=master)](https://travis-ci.org/radiovisual/words-only) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/words-only/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/words-only?branch=master)


## Install

```
$ npm install --save words-only
```

## Usage

```js
const wordsOnly = require('words-only');

wordsOnly('unicorns!!!! & rainbows!!!!');
//=> 'unicorns rainbows'
```


## API

### wordsOnly(input)

#### input

Type: `string`

The string to search for words.


## Notes

This module uses [letterset](https://github.com/radiovisual/letterset) to determine letters that belong to words.
If you find that words-only is removing actual letters from your words, please [open an issue on the letterset repo](https://github.com/radiovisual/letterset). 


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
