const express=require('express');
const { InfoController } = require('../../controllers');
const airplaneRoute = require('./airplane-routes');
const cityRoute = require('./city-routes');
const v1routes=express.Router()

v1routes.get("/info", InfoController.getInfo);
v1routes.use("/airplanes", airplaneRoute); 
v1routes.use("/city", cityRoute); 

module.exports=v1routes