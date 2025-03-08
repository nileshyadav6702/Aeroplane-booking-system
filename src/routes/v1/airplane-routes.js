const express=require('express')
const {AirplaneController}=require('../../controllers');
const { AirplaneMiddleware ,MongoIdMiddleware} = require('../../middlewares');
const airplaneRoute=express.Router()

/// api/v1/airplanes POST
airplaneRoute.post("/", AirplaneMiddleware.validatecreateairplane, AirplaneController.createairplane);

//api/v1/airplanes/
airplaneRoute.get("/", AirplaneController.getairplanes);

//api/v1/airplanes/:id
airplaneRoute.get("/:id", MongoIdMiddleware, AirplaneController.getAirPlane);

//api/v1/airplanes/:id
airplaneRoute.delete(
  "/:id",
  MongoIdMiddleware,AirplaneController.deleteAirPlane
);
//api/v1/airplanes/:id
airplaneRoute.put(
  "/:id",
  MongoIdMiddleware,AirplaneController.updateAirplane
);

module.exports=airplaneRoute