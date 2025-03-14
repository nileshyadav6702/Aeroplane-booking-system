const express = require('express')
const { AirportController } = require("../../controllers");
const {MongoIdMiddleware, AirportMiddleware} = require('../../middlewares');
const airportRoute = express.Router()

//create an airport API:- /api/v1/airport POST
airportRoute.post('/', AirportMiddleware.validatecreateairport, AirportController.AddAirport)

//get all the airport API:- /api/v1/airport GET
airportRoute.get('/',AirportController.GetAllAirport)

//get all the airport API:- /api/v1/airport/:id GET
airportRoute.get('/:id', MongoIdMiddleware, AirportController.GetAirport)

//get all the airport API:- /api/v1/airport/:id DELETE
airportRoute.delete('/:id', MongoIdMiddleware, AirportController.DeleteAirport)


module.exports = airportRoute
