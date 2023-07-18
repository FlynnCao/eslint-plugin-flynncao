const rule = require("../../../lib/rules/replace-correct-function"),
RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("replace-correct-function", rule, {
		
	// 这是合法的可以通过规则的案例
	valid:[
		{
			code:`getNiceBuyers();`
		},
	],
	invalid: [
		{
			code:`const findBuyers = ()=>{};findBuyers();`,
			errors: [{
				message: 'Function Deprecated',
				type: "CallExpression"
		}],
		},
	]
});
