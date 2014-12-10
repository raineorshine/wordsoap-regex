'use strict'

module.exports = {
	// from http://tim.mackey.ie/CleanWordHTMLUsingRegularExpressions.aspx
	msoTags: /<[\/]?(font|span|xml|del|ins|[ovwxp]:\w+)[^>]*?>/,
	msoAttributes: /<([^>]*)(?:class|lang|style|size|face|[ovwxp]:\w+)=(?:'[^']*'|""[^""]*""|[^\s>]+)([^>]*)>/,

	msoClass: /\W+class=Mso\w*\b/
}
