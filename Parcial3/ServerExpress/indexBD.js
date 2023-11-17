const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();

app.use(cors());

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alumnos'
});

    app.get('/Alumno', (req, res) => {
        console.log(req.query.NumControl);
        let consulta = '';
    
        if (typeof(req.query.NumControl) === 'undefined'){
            consulta = `SELECT * FROM alumno`;
        } else {
            consulta = `SELECT * FROM alumno WHERE NumControl=${req.query.NumControl}`;
        }
    
        console.log(consulta);
    
        connection.query(
            consulta,
            function(err, results, fields) {
                if (results.length==0) {
                    res.json({ mensaje: 'El número de control No existe' });
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