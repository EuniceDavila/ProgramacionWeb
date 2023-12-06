const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();
const { jsPDF } = require("jspdf");
const fs = require('fs');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'actores'
});

/*app.get('/Actor', (req, res)=>{
    console.log(req.query.id);
    let consulta = ''
    if(typeof(req.query.id)=='undefined'){
        consulta = `select * from actor`
    } else {
        consulta = `select * from actor where id=${req.query.id}`
    }
    console.log(consulta);

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({mensaje:"Dato no encontrado"});
            }
            else{
                res.json(results);
            }
        }
    );
});*/

app.post('/Actor/formato', (req, res) => {
    const { id, nombre, lugar_nacimiento, ha_ganado_premios, cantidad_premios, peliculas } = req.body;

    const doc = new jsPDF();
    doc.text(`ACTOR:`, 10, 10);
    doc.text(`ID: ${id}`, 10, 20);
    doc.text(`Nombre: ${nombre}`, 10, 30);
    doc.text(`Lugar de nacimiento: ${lugar_nacimiento}`, 10, 40);
    doc.text(`¿Ha ganado premios?: ${ha_ganado_premios}`, 10, 50);
    doc.text(`Cantidad de premios: ${cantidad_premios}`, 10, 60);
    doc.text(`Películas: ${peliculas}`, 10, 70);

    const rutaCarpeta = 'C:\\xampp\\htdocs\\ProgramaciónWeb\\CRUD\\ArchivosPDF';

    if (!fs.existsSync(rutaCarpeta)) {
        fs.mkdirSync(rutaCarpeta, { recursive: true });
    }

    const archivoPDF = path.join(rutaCarpeta, 'actor.pdf');
    doc.save(archivoPDF);
    res.sendFile(archivoPDF);
});

app.get('/Actor', (req, res) => {
    console.log(req.query.id);
    let consulta = '';

    if (typeof (req.query.id) === 'undefined') {
        consulta = `SELECT * FROM actor`;
    } else {
        consulta = `SELECT * FROM actor WHERE id = ${req.query.id}`;
    }

    console.log(consulta);

    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length === 0) {
                res.json({
                    status: 0,
                    mensaje: 'Los datos del actor no están almacenados en la base de datos',
                    datos: {}
                });
            } else {
                res.json({
                    status: 1,
                    mensaje: "Actor encontrado",
                    datos: (results.length == 1) ? results[0] : results
                });
            }
        }
    );
});

app.post('/Actor', (req, res) => {
    const { nombre, lugar_nacimiento, ha_ganado_premios, cantidad_premios, peliculas } = req.body;

    if (nombre && lugar_nacimiento && ha_ganado_premios && cantidad_premios && peliculas) {
        const insertQuery = `INSERT INTO actor (nombre, lugar_nacimiento, ha_ganado_premios, cantidad_premios, peliculas) VALUES (?, ?, ?, ?, ?)`;
        const values = [nombre, lugar_nacimiento, ha_ganado_premios, cantidad_premios, peliculas];

        connection.query(insertQuery, values, (err, results) => {
            if (!err && results && results.affectedRows === 1) {
                res.json({
                    status: 1,
                    mensaje: "Actor creado exitosamente"
                });
            } else {
                res.status(500).json({
                    status: 0,
                    mensaje: "No se pudo crear el actor"
                });
            }
        });
    } else {
        res.status(400).json({
            status: 0,
            mensaje: "Llene todos los campos"
        });
    }
});

app.delete('/Actor', (req, res) => {
    console.log(req.query.id);
    let sentenciasql = '';

    if (typeof (req.query.id) === 'undefined') {
        res.json({
            status: 0,
            mensaje: "Falto ingresar el id del actor",
            datos: {}
        });
    } else {
        sentenciasql = `delete  FROM actor WHERE id = ${req.query.id}`;
    }

    connection.query(
        sentenciasql,
        function (err, results, fields) {

            if (results.affectedRows == 1) {
                res.json({
                    status: 1,
                    mensaje: "Registro eliminado",
                    datos: {}
                });
            } else {
                res.json({
                    status: 0,
                    mensaje: "No se pudo eliminar el registro",
                    datos: {}
                });
            }

        });
});

app.patch('/Actor/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, lugar_nacimiento, ha_ganado_premios, cantidad_premios, peliculas } = req.body;

    const updateQuery = `UPDATE actor SET nombre='${nombre}', lugar_nacimiento='${lugar_nacimiento}', ha_ganado_premios='${ha_ganado_premios}', cantidad_premios=${cantidad_premios}, peliculas='${peliculas}' WHERE id=${id}`;

    console.log("Consulta de actualización:", updateQuery);

    connection.query(updateQuery, (err, results) => {
        if (err) {
            console.error("Error en la actualización:", err);
            res.status(500).json({ mensaje: 'Error al actualizar el registro' });
        } else {
            console.log("Registro actualizado:", results);
            res.status(200).json({ mensaje: 'Registro actualizado correctamente' });
        }
    });
});


app.listen(8082, (req, res) => {
    console.log("Servidor Express en puerto 8082");
});
