const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('./api/datasources/mongodb.js');
const routes_1 = require('./api/routes')

const db_url = process.env.DATABASE_URL;

// Constants
console.log(process.env)
const PORT = process.env.PORT | 8080;
const HOST = process.env.HOST | '0.0.0.0';


mongo.init(db_url).then((value)=>{
	console.log("Database initialized!")
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use('/',routes_1)
	app.listen(PORT,HOST)
	console.log(`Running on http://${HOST}:${PORT}`)
})
.catch(err => console.log(err))


