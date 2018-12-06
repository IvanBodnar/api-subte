const Linea = require('../db/models').Linea;


const getLineas = async (req, res, next) => {
    try {
        const lineas = await Linea.find({});
        res.send(lineas);
    }
    catch (e) {
        res.send(e)
    }
};

module.exports = {
    getLineas: getLineas
};
