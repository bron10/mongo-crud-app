function middlewares(){
	const MongoClient = require('mongodb').MongoClient;
	
	const jwt = require('jsonwebtoken');
	const url = 'mongodb://localhost:27017';	
	const db  = 'scientify';
	

	return {
		verifyAuth : (req, res, next)=>{
			
			jwt.verify(req.headers.authtoken, process.env.secret, function(err, decoded) {
				if(err){
					res.status(401);
					res.send({
						message : "Authentication failed!"
					})
					return;
				}
				next()
			});
		},
		connectMongo(collection){
			
			return (req, res, next)=>{
				MongoClient.connect(url, (err, client)=>{
					if (err){
						throw err;
						res.status(500);
						res.send({
							message : "Something went wrong!"
						})
						return client.close();	
					} 
					req['collectionInstance'] = client.db(db).collection(collection);
					req['mongoClient'] = client;
					next();	
				})
			}
		}
	}
}

module.exports = middlewares()