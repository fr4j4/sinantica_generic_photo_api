const router = require('express').Router();
const imgController = require('../controllers/imageController');

router.post('/subirFoto', async (req,res) => {
    fotoEncriptada = await imgController.procesarFoto(req.body.image)
    res.send(fotoEncriptada)
})

router.get('/obtenerFoto',async (req,res)=>{
    fotoDesencriptada = await imgController.obtenerFoto(req.query.foto_id,req.query.foto_password)
    console.log(fotoDesencriptada)
    res.send(fotoDesencriptada)
})

module.exports =  router
