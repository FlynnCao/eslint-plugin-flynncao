/**
 * @fileoverview Flynn Cao&#39;s ESLint Config Presets.
 * @author flynncao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
	rules:requireIndex(__dirname + "/rules"),
	configs:{
		recommended:{
			plugins:[], // Can add more plugins here
			rules:{
				"eslint-plugin/replace-correct-function":1,
				"eslint-plugin/lodash-import":1,
				"lodash-import": 2
			}
		}
	}
}



