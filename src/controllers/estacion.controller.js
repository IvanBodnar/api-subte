const Estacion = require('../db/models').Estacion;


const getEstaciones = async (req, res, next) => {
    try {
        const estaciones = await Estacion.find({});
        res.send(estaciones);
    }
    catch(e) {
        res.send(e)
    }
};

module.exports = {
    getEstaciones: getEstaciones
};
