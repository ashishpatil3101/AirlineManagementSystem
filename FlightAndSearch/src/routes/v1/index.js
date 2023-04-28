
const express = require('express');

const City_controller = require('../../Controllers/city-controller');
const Flight_controller = require('../../Controllers/flight-controller');
const Airport_controller = require('../../Controllers/airport-controller');

//middlewares
const { FlightMiddlewares } = require('../../MiddleWares/index');


const  router = express.Router();

router.post('/city', City_controller.create);
router.delete('/city/:id' , City_controller.destroy);

router.get('/city/:id' , City_controller.get );
router.get('/city' , City_controller.getAll );
router.patch('/city/:id' , City_controller.update);

//flights routes

router.post('/flights', 
      FlightMiddlewares.validateCreateFlight, 
      Flight_controller.create
);

router.get('/flights', Flight_controller.getAll);
router.get('/flights/:id', Flight_controller.get);
router.patch('/flights/:id' , Flight_controller.update );

//airport routes
router.post('/airports', Airport_controller.create);

module.exports = router;