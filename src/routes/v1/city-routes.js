const express=require('express')
const {CityController}=require('../../controllers');
const { MongoIdMiddleware} = require('../../middlewares');
const { CityMiddleware} = require('../../middlewares');
const cityroute=express.Router()

// /api/v1/city
cityroute.post("/", CityMiddleware, CityController.AddCity);

// /api/v1/city
cityroute.get("/", CityController.GetAllCity);

// /api/v1/city/:id
cityroute.delete("/:id", MongoIdMiddleware, CityController.DeleteCity);

// /api/v1/city/:id
cityroute.patch(
  "/:id",
  MongoIdMiddleware,CityController.updateCity
);


module.exports=cityroute





