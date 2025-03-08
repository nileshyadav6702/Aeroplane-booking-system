const express=require('express');
const { InfoController } = require('../../controllers');
const airplaneRoute = require('./airplane-routes');
const v1routes=express.Router()

v1routes.get("/info", InfoController.getInfo);
v1routes.use("/airplanes", airplaneRoute); 

module.exports=v1routes