const express = require('express');
const routes = require('./routes/main.routes');
const connection = require('./db/models').connection;
// const bodyParser = require('body-parser');


const app = express();

app.use( express.json() );

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
});

app.use('/', routes);
connection();

app.listen(3000, ()=> {console.log('Listening on 3000')});

