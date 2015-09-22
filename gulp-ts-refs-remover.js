var stripLine = require("gulp-strip-line");

function tsRefsRemover()
{
	return stripLine([/\/\/\/\W?<reference/, 'use strict']);
}

module.exports = tsRefsRemover;