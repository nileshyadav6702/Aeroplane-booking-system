const {AirplaneService}=require('../services')
const {StatusCodes}=require('http-status-codes')
const {CommonError}=require('../utils')

async function createairplane(req,res){
    try{
        const airplane=await AirplaneService.createairplane({
            modelNumber:req.body.modelNumber,
            Capacity:req.body.Capacity
        })
        CommonError.SuccessResponse.data=airplane
        return res.status(StatusCodes.CREATED)
        .json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res
          .status(error.statuscode)
          .json(CommonError.ErrorResponse);
    }
}

async function getairplanes(req,res){
    try{
        let allairplanes =await  AirplaneService.getAllAirplanes();
        CommonError.SuccessResponse.data=allairplanes
        return res.status(StatusCodes.OK).json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res.status(error.statuscode).json(CommonError.ErrorResponse)
    }
}

module.exports={createairplane,getairplanes}