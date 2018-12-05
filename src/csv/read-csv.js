import parse from 'csv-parse/lib/sync';
import fs from 'fs';

const csvPromise = (fileName) => {
    return new Promise( (resolve, reject) => {
        fs.readFile( fileName, ( err, data ) => {
            if (err) return reject(err);
            resolve( parse( data, { columns: true } ) );
        } )
    } )
};


export default csvPromise('src/csv/lineas.csv');
