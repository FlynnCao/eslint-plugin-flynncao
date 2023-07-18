/**
 * @fileoverview Check if your case is wrong.
 * @author flynncao
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "You should write some comments for this kind of function",
      recommended: true,
			url: 'https://www.google.com/'
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [{
		 type:'object',
		 properties:{
			objName:{
				type: 'string',
			},
			propNames:{
				type: 'array'
			},
			commentName:{
				type: 'string'
			}
		}}], // Add a schema if the rule has options
		// Violation Messages(Required)
		messages:{
			callWithoutComment: 'You should write "{{comment}}" for "{{callMethod}}"',
			callWithWrongComment: '"{{realComment}}" of the "{{callMethod}} does not have the right comment start with "{{comment}}"',
		}
  },

  create(context) {
    // variables should be defined here
		const options = context.options[0]
		const {
			objName,
			propNames,
			commentName
		} = options
		const sourceCode = context.getSourceCode()
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
			CallExpression(node){
				const curObjName = node.callee?.object.name;
				const curPropName = node.callee?.property.name;
				if (!curObjName || !curPropName) {
						return;
				}
				if (curObjName !== objName || !propNames?.includes(curPropName)) {
					return;
        }
				const comments = sourceCode.getCommentsBefore(node) || [];
				const curComment = comments.map(comment => comment.value).join(' ').trim();
				// Error when comments is empty
					if (curComment?.trim() === '') {
						context.report({
								node,
								messageId: 'callWithoutComment',
								data: {
										callMethod: `$ {
												curObjName
										}.$ {
												curPropName
										}`,
										comment: commentName,
								}
						});
						return;
				}
				// Legal comments
				if (curComment.includes(commentName)) {
						return;
				}
				 // Error when comments is not empty and not include commentName
				 context.report({
					node,
					messageId: 'callWithoutRightComment',
					data: {
							callMethod: `$ {
									curObjName
							}.$ {
									curPropName
							}`,
							comment: commentName,
							realComment: curComment,
					}
			});
			}
    };
  },
};
