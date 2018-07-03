//const router = require('router');

function Scientist(){
	this.MongoClient = require('mongodb').MongoClient;
	this.url = 'mongodb://localhost:27017';	
	this.db  = 'scientify';
	this.collection = 'scientists';
	return {
		getAllScientist(req, res){
			const self = this;
			//console.log("this.MongoClient", this.MongoClient);
			this.MongoClient.connect(self.url, (err, client)=>{
				
				client.db(self.db).collection(self.collection).find({})
				.toArray((err, docs)=>{
					client.close();
					res.send({data : docs});
				})
			});
		},
		updateScientist(req, res){
			const scientistId 	= req.params.scientist_id;
			const bodyParams 	= req.body;
			const self = this;
			this.MongoClient.connect(self.url, (err, client)=>{
				
				client.db(self.db).collection(self.collection).updateOne({ _id : scientistId }
				, { $set: {name: bodyParams} }, function(err, result) {
					client.close();
					console.log("result", result)
					console.log("err", err.stack)
					// return res.send({
					// 	message : 'Details updated'
					// })
				});  
			});
			
		}
	}
}

module.exports = Scientist();
//const inst = new Scientist(, );
//console.log("inst", inst.getAllScientist());

