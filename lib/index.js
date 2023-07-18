/**
 * @fileoverview Flynn Cao&#39;s ESLint Config Presets.
 * @author flynncao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
// const rules = requireIndex(__dirname + "/rules");
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
	rules:{
		'loadash-import':require('./rules/lodash-import'),
	},
	rulesConfig:{
		'loadash-import': 2 // 0:off, 1:warn, 2:error
	},	
	configs:{
		recommended:{ // different set of rules for different environments
			plugins:['flynncao'], // you can add more plugins here
			rules:{
				'lodash-import': 'error' // this will use error/warn/or off
			}
		}
	}
}



