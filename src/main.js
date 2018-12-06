const express = require('express');
const routes = require('./routes/main.routes');
const connection = require('./db/db').connection;
// const bodyParser = require('body-parser');


const app = express();

app.use( express.json() );

app.use('/', routes);
connection();

app.listen(3000, ()=> {console.log('Listening on 3000')});

