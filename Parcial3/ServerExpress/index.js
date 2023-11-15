const express = require('express')
//const cors = require('cors');

const app = express();
//app.use(cors());

app.get('/', (req, res) => {
    res.write("server express respondiendo a get");
});

app.post('/', (req, res) => {
    res.write("server express respondiendo a post");
});

app.delete('/', (req, res) => {
    res.write("server express respondiendo a delete");
});

app.listen(8082, (req, res) => {
    console.log("servidor express en puerto 8082");
});