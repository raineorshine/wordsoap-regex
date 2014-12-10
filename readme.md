# wordsoap-regex
[![Build Status](https://travis-ci.org/metaraine/wordsoap-regex.svg?branch=master)](https://travis-ci.org/metaraine/wordsoap-regex)
[![NPM version](https://badge.fury.io/js/wordsoap-regex.svg)](http://badge.fury.io/js/wordsoap-regex)

> Regular expressions for cleaning up dirty HTML output from Microsoft Word.

```js
module.exports = {
	// from http://tim.mackey.ie/CleanWordHTMLUsingRegularExpressions.aspx
	msoTags: /<[\/]?(font|span|xml|del|ins|[ovwxp]:\w+)[^>]*?>/,
	msoAttributes: /<([^>]*)(?:class|lang|style|size|face|[ovwxp]:\w+)=(?:'[^']*'|""[^""]*""|[^\s>]+)([^>]*)>/,
}
```


## License

ISC © [Raine Lourie](https://github.com/metaraine)
