const mysql = require('mysql');
const conexion = require('../conn');

const selectTitulos = (callback)=>{
	conexion.query('SELECT titulo FROM libro', (error, resultado)=>{
		return callback(error, resultado);
	});
}

const eliminarLibro = (id_libro, callback)=>{
	conexion.query('DELETE FROM libro WHERE id_libro=?', id_libro, (error, resultado)=>{
		if (error) throw error;
		else {
			return callback(error, resultado);
		}
	});
}

module.exports = {selectTitulos, eliminarLibro};



