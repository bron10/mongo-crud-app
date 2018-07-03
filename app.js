const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes');
//
app.use(bodyParser.json()); // for parsing application/json
//console.log("controllers", controllers.scientists.getAllScientist)
app.use('/scientists', routes.scientistRoutes())

app.listen(3000, () => console.log('App listening on port 3000!'))