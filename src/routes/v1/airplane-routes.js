const express=require('express')
const {AirplaneController}=require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
const airplaneRoute=express.Router()

/// api/v1/airplanes POST
airplaneRoute.post("/", AirplaneMiddleware.validatecreateairplane, AirplaneController.createairplane);

//api/v1/airplanes/
airplaneRoute.get("/", AirplaneController.getairplanes);

module.exports=airplaneRoute