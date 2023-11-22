const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();

app.use(cors());

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'actores'
});

    app.get('/Actor', (req, res) => {
        console.log(req.query.NumControl);
        let consulta = '';
    
        if (typeof(req.query.id) === 'undefined'){
            consulta = `SELECT * FROM actor`;
        } else {
            consulta = `SELECT * FROM actor WHERE id=${req.query.id}`;
        }
    
        console.log(consulta);
    
        connection.query(
            consulta,
            function(err, results, fields) {
                if (results.length==0) {
                    res.json({ mensaje: 'Los datos del actor no estan almacenados en la base de datos' });
                } else{
                    res.json(results);
                }
            }
        );
    });

app.post('/', (req,res)=>{
    res.json({mensaje:"Server Express respondiendo a post"});
});

app.delete('/', (req,res)=>{
    res.json({mensaje:"Server Express respondiendo a delete"});
});

app.listen(8082, (req,res)=>{
    console.log("Servidor Express en puerto 8082");
});