const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const readCsv = (fileName) => {
    return new Promise( (resolve, reject) => {
        fs.readFile( fileName, ( err, data ) => {
            if (err) return reject(err);
            resolve( parse( data, { columns: true } ) );
        } )
    } )
};


module.exports = {
    readLineas: readCsv('src/csv/lineas.csv'),
    readEstaciones: readCsv('src/csv/estaciones.csv')
};

