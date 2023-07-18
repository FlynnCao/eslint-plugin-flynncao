module.exports =  {
	meta: {
		create(context){
			return {
				CallExpression(node){
					if(node.callee.name === 'findBuyers'){
						context.report({
							node,
							message: 'findBuyers is deprecated, please use findNewBuyers'
						})
					}else{
						return;
					}
				}
			}
		}
	}
}
