process.env.APP_ENV = 'local'
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./config')
const middlewares = require('./middlewares');
app.use(bodyParser.json()); // for parsing application/json

app.use('/scientists', [middlewares.verifyAuth, middlewares.connectMongo('scientists'), routes.scientistRoutes()])
app.use('/auth', routes.authRoutes())

app.listen(3000, () => console.log('App listening on port 3000!'))