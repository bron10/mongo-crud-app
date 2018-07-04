//require('./controllers');
const controllers = require('./controllers');

const scientistController = controllers.scientists;
//const authController
function Routes(){
	//const controllers;
	this.express 		= require('express')
	
}

Routes.prototype.scientistRoutes = function(){
	const router 		= this.express.Router();
	router.get('/all', scientistController.getAllScientist);
	router.put('/:scientist_id', scientistController.updateScientist);
	router.get('/:scientist_id', scientistController.getSingleScientist);
	router.post('/add', scientistController.insertScientist)

	return router;
}

Routes.prototype.authRoutes = function(){
	const router 		= this.express.Router();
	router.post('/', controllers.auth.login)
	return router;
}


//let r = new Routes();));
module.exports = new Routes();