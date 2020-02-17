const CryptoJS = require('crypto-js');
const crypto = require('crypto');
const ObjectID = require('mongodb').ObjectID
const mongo = require('../../datasources/mongodb');

const desencriptarFoto = (encryptedText, password) => {
    /*
    var parsedWordArray = CryptoJS.enc.Base64.parse(encrypted);
    var decrypted = parsedWordArray.toString(CryptoJS.enc.Utf8);
    return decrypted;
    */
    return CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);

}
const encriptarFoto = (fotob64,password) => {
    /*
    var wordArray = CryptoJS.enc.Utf8.parse(fotob64);
    var encrypted = CryptoJS.enc.Base64.stringify(wordArray);
    return encrypted.toString()
    */
    return foto_encriptada = CryptoJS.AES.encrypt(fotob64, password).toString()
}

const guardarFoto = async (fotoEnc) => {
    const db = mongo.getDB();
    return db.collection('pictures').insertOne({AES_STRING: fotoEnc})
	.then(writeOpResult => {
	    console.log('WOpRes: ',writeOpResult);
	    return writeOpResult.ops[0]._id;
	})
	.catch(err => {throw 'Error saving picture'})
}

const obtenerFoto = async (foto_id, foto_password) => {
    const db = mongo.getDB();
    return db.collection('pictures').findOne({_id: new ObjectID(foto_id)})
	.then(result_obj => {
	    return result_obj.AES_STRING;
	})
	.catch(err => {throw 'Error getting picture'})
}
module.exports.obtenerFoto = async (foto_id,password) => {
    encStr = await obtenerFoto(foto_id); 
    return desencriptarFoto(encStr,password);
}

module.exports.procesarFoto = async (fotob64) => {
    var timestamp = new Date().getTime().toString();
    const password =  CryptoJS.HmacSHA256(timestamp,"9d__FduuyTSY$%9896387D&sfAAZyuLSKML").toString()
    console.log('pass: ',password)
    const foto_encriptada = encriptarFoto(fotob64,password);
    const result_id_enc = await guardarFoto(foto_encriptada);
    response = {}
    response.result = {}
    response.metadata = {
	id_foto: result_id_enc,
	foto_password: password
    }
    console.log(response)
    return response;
}

