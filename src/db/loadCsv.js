const readLineas = require('../csv/read-csv').readLineas;
const readEstaciones = require('../csv/read-csv').readEstaciones;
const connection = require('./models').connection;
const Linea = require('./models').Linea;
const Estacion = require('./models').Estacion;
const wk = require('wellknown');

const mongoose = connection();

readLineas
    .then(
        lineas => lineas.forEach( element => {
            const tramo = new Linea({
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: wk(element.WKT).coordinates
                },
                properties: {
                    linea: element.lineasub.replace('LINEA ', '')
                }
            });
            tramo.save();
        } )
    ).catch(
        e => console.log(e)
    );

readEstaciones
    .then(
        estaciones => estaciones.forEach( element => {
                const estacion = new Estacion({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [+element.long, +element.lat]
                    },
                    properties: {
                        estacion: element.estacion,
                        linea: element.linea
                    }
                });
                estacion.save();
            })
        ).catch(
            e => console.log(e)
    );


// Close connection
setTimeout(
    () => mongoose.connection.close( () => {
        console.log('Connection closed');
    } ), 1000
);
