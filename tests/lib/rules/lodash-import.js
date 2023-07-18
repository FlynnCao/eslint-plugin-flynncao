// tests/lib/rules/lodash-auto-import.js
/**
 * @fileoverview 这是一个lodash按需引入的eslint规则
 * @author guming-eslint
 */
 "use strict";

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 const rule = require("../../lib/rules/lodash-import"),
	 RuleTester = require("eslint").RuleTester;
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 const ruleTester = new RuleTester();
 ruleTester.run("lodash-auto-import", rule, {
	 valid: ['import omit from "lodash/omit";', 'import { omit } from "lodash-es";'],
 
	 invalid: [
		 // eslint-disable-next-line eslint-plugin/consistent-output
		 {
			 code: 'import {} from "lodash";',
			 errors: [{ message: "invalidImport" }],
			 output: 'import xxx from lodash/xxx'
		 },
		 {
			 code: 'import {} from "lodash-es";',
			 errors: [{ message: "invalidImport" }],
			 output: 'import { xxx } from lodash-es'
		 },
		 {
			 code: 'import { omit } from "lodash";',
			 errors: [{ message: "directlyImportLodash" }],
			 output: 'import omit from "lodash/omit";',
		 },
		 {
			 code: 'import { omit as _omit } from "lodash";',
			 errors: [{ message: "directlyImportLodash" }],
			 output: 'import omit from "lodash/omit";',
		 },
		 {
			 code: 'import { omit, debounce } from "lodash";',
			 errors: [{ message: "directlyImportLodash" }],
			 output:
				 'import omit from "lodash/omit"; \n import debounce from "lodash/debounce";',
		 },
	 ],
 });
 