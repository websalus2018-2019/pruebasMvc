const express = require('express');
var router = express.Router();
const modelo = require('../modelos/modelo');

router.get('/libros', (req, res)=>{
	modelo.selectTitulos((error, resultado)=>res.render('vista', {registros:resultado}));
})

router.get('/eliminarLibro', (req, res)=>{
	res.render('vistaEliminar');
})

router.delete('/eliminarLibro/eliminar', (req, res)=>{
	modelo.eliminarLibro(req.body.id_libro, (error, resultado)=>{res.send('registro eliminado con éxito')});
})


module.exports = router;