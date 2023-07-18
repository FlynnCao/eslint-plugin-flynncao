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
	rules:{
		'loadash-import':require('./rules/lodash-import'),
		'mandatory-comments': require('./rules/mandatory-comments')
	},
	rulesConfig:{
		'loadash-import': 2 // 0:off, 1:warn, 2:error
	},	
	configs:{
		recommended:{ // different set of rules for different environments
			plugins:['flynncao'], // you can add more plugins here
			rules:{
				'flynncao/lodash-import': 'error',
				'flynncao/mandatory-comments': 'error'
			}
		},
		essential:{
			plugins:['flynncao'], 
			rules:{
				'flynncao/lodash-import': 'warning',
				'flynncao/mandatory-comments': 'off'
			}
		}
	}
}



