//const router = require('router');

function Scientist(){
	const mongoDB = require('mongodb');
	this.MongoClient = mongoDB.MongoClient;
	this.url = 'mongodb://localhost:27017';	
	this.db  = 'scientify';
	this.collection = 'scientists';

				
	//console.log("this.MongoClient", mongoDB.ISODate)
	return {
		getAllScientist(req, res){
			const self = this;
				
			req.collectionInstance.find({})
			.toArray((err, docs)=>{
				req.mongoClient.close();
				res.send({data : docs});
			})
		},
		updateScientist(req, res){
			const scientistId 	= req.params.scientist_id;
			const bodyParams 	= req.body;
			
			req.collectionInstance.updateOne({ _id : mongoDB.ObjectID(scientistId) }
			, { $set: {name: {first:bodyParams.firstname, last: bodyParams.lastname}} }, function(err, result) {
				if (err) throw err;
					req.mongoClient.close();
				
				return res.send({
					message : `${result.result.nModified} row(s) updated`
				})
			});
			
		},
		getSingleScientist(req, res){
			const scientistId 	= req.params.scientist_id;
			const bodyParams 	= req.body;
			const self = this;
			req.collectionInstance.find({_id : mongoDB.ObjectID(scientistId)})
			.toArray((err, docs)=>{
				req.mongoClient.close();
				res.send({data : docs});
			})
		},
		insertScientist(req, res){
			let newScientistData = req.body;
			const self = this;
			req.collectionInstance
				.insertOne({
				    "name" : {
				        "first" : newScientistData.firstname,
				        "last" : newScientistData.lastname
				    },
				    "birth" : new Date(newScientistData.birth),
				    "death" : new Date(newScientistData.death),
				    "contribs" : newScientistData.contribs,
				    "awards" : newScientistData.awards
				}, (err, result)=>{
				    if (err) throw err;
				    
				    req.mongoClient.close();
				    res.send({
						message : `New Scientist added successfully`
					})
			  });
			
		}
	}
}

module.exports = Scientist();

