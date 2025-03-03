const express=require('express');
const { InfoController } = require('../../controllers');
const v1routes=express.Router()

v1routes.get("/info", InfoController.getInfo);
module.exports=v1routes