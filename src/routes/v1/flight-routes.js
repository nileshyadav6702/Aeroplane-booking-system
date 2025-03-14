const express=require('express')
const { FlightController } = require("../../controllers");
const {MongoIdMiddleware, FlightMiddleware} = require('../../middlewares');
const flightRoute=express.Router()

//create an airport API:- /api/v1/flight POST
flightRoute.post('/',FlightMiddleware.validatecreateflight, FlightController.createFlight)

//get all the airport API:- /api/v1/flight GET
flightRoute.get('/',FlightController.getFlights)

//get all the airport API:- /api/v1/flight/:id GET
flightRoute.get('/:id', MongoIdMiddleware, FlightController.getFlight)

//get all the airport API:- /api/v1/flight/:id DELETE
flightRoute.delete('/:id', MongoIdMiddleware, FlightController.deleteFlight)

//update the airport API:- /api/v1/flight/:id UPDATE
flightRoute.delete('/:id', MongoIdMiddleware, FlightController.updateFlight)


module.exports = flightRoute
