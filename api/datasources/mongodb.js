MongoClient = require('mongodb').MongoClient;
const client = undefined;
var db = undefined;
const connection_options = {
    authSource: 'admin',
    authenticationDatabase: 'admin'
};


const initialize = async (url) => {
    const client =  new MongoClient(url)
    return new Promise((resolve,reject) => {
	client.connect((connection_error, client) => {
	    if(connection_error) reject(connection_error);
	    db = client.db('api_data')
	    console.log(db)
	    resolve()
	})
    })
} 
const getDB = () => {
    return db;
}

module.exports.init=initialize;
module.exports.getDB = getDB;
