const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { CommonError } = require("../utils");


async function AddAirport(req,res) {
    try{
        const airport=await AirportService.AddAirport(req.body)
        CommonError.SuccessResponse.data=airport
        return res.status(StatusCodes.CREATED).json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res.status(error.statuscode).json(CommonError.ErrorResponse);
    }
}

async function GetAllAirport(req,res) {
    try{
        const airports=await AirportService.GetAllAirport()
        CommonError.SuccessResponse.data=airports
        return res.status(StatusCodes.OK).json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res.status(error.statuscode).json(CommonError.ErrorResponse);
    }
}

async function GetAirport(req, res) {
  try {
    const airport = await AirportService.GetAirport(req.params.id);
    CommonError.SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}

async function DeleteAirport(req, res) {
  try {
    const airport = await AirportService.DeleteAirport(req.params.id);
    CommonError.SuccessResponse.data = airport;
    return res.status(200).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(400).json(CommonError.ErrorResponse);
  }
}


module.exports = { AddAirport, GetAllAirport, GetAirport, DeleteAirport };