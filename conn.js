const mysql = require('mysql');

const config = {
    host: 'wm1708.com',
    user: 'c21_wm1708',
    password: 'IY3ae4ArqcLvJ',
    database: 'c21_wm1708',
};

//const pool = mysql.createPool(config);

const conexion = mysql.createConnection(config);

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

module.exports = conexion;