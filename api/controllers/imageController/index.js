const CryptoJS = require('crypto-js');

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
    return CryptoJS.AES.encrypt(fotob64, password).toString()
}

module.exports.obtenerFoto = (encStr,password) => {
    return desencriptarFoto(encStr,password);
}

module.exports.procesarFoto = (fotob64,password) => {
    return encriptarFoto(fotob64,password);
}

