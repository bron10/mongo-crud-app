function Auth(){
	const jwt = require('jsonwebtoken');
	return {
		login(req, res){
			const bodyParams = req.body;
			if(bodyParams.username=='admin' && bodyParams.password=='password'){

				let token = jwt.sign(bodyParams, process.env.secret, {
		          expiresIn: 60 * 60 // expires in 24 hours
		        });
		        res.send({
		        	token 
		        })
			}else
				return res.send("Invalid auth");
		}
	}
}

module.exports = Auth();