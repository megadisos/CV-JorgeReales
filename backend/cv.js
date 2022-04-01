/**
 * docker build . -t cv
 * docker run -it --network=local_js cv
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const port = config.api.port;
const bd = require('./queries.js');




app.get('/', (req, res) => {
    res.json({info:'API Curriculum vitale Jorge Reales'});   
});

app.get('/users/:id', bd.getUsers);
app.get('/carrer/:id', bd.getCarrerHistory);
app.get('/academic/:id', bd.getAcademicHistory);
app.get('/skills/:id', bd.getSkills);

app.listen(port, ()=>{
    console.log('app listening on port '+ port);
});