const express = require('express');
const lineaControllers = require('../controllers/linea.controller');
const estacionControllers = require('../controllers/estacion.controller');

const router = express.Router();

router.get('/lineas', lineaControllers.getLineas);

router.get('/estaciones', estacionControllers.getEstaciones);

module.exports = router;
