const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/subte';
mongoose.Promise = global.Promise;

const makeConnection = () => {
    mongoose.connect(uri);
    return mongoose;
};

const lineaSchema = new mongoose.Schema({
    type: String,
    geometry: Object,
    properties: {
        linea: String
    }
});

const estacionSchema = new mongoose.Schema({
    type: String,
    geometry: Object,
    properties: {
        estacion: String,
        linea: String
    }
});

const Linea = mongoose.model('Linea', lineaSchema);
const Estacion = mongoose.model('Estacion', estacionSchema);

module.exports = {
    connection: makeConnection,
    Linea: Linea,
    Estacion: Estacion
};
