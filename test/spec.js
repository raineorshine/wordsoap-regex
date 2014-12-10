'use strict'
var assert = require('insist')
var wordsoap = require('../index.js')

describe('msoClasses', function() {
	it('should remove Mso- classes', function () {
		var input = '<p class=MsoNormal>test</p>'
		var output = '<p>test</p>'
		assert.notEqual(wordsoap.msoClass, undefined, 'msoClass is not defined')
		assert.equal(input.replace(wordsoap.msoClass, ''), output)
	})
})
