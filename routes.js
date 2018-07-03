//require('./controllers');
const controllers = require('./controllers');
const scientistController = controllers.scientists;
function Routes(){
	//const controllers;
	const express 		= require('express')
	this.router 		= express.Router();
}

Routes.prototype.scientistRoutes = function(){
	this.router.get('/all', scientistController.getAllScientist);
	this.router.put('/:scientist_id', scientistController.updateScientist);
	
	return this.router;
}

//let r = new Routes();));
module.exports = new Routes();