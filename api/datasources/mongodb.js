MongoClient = require('mongodb').MongoClient;
const client = undefined;
const db = undefined;
const connection_options = {
    authSource: 'admin',
    authenticationDatabase: 'admin'
};


const initialize = async (url) => {
    console.log(url)
    const client =  new MongoClient(url)
    return new Promise((resolve,reject) => {
	client.connect(connection_error => {
	    if(connection_error) reject(connection_error);
	    resolve()
	})
    })
} 
const getDb = () => {
    return db;
}

module.exports.init=initialize;
module.exports.getDb = getDb;
