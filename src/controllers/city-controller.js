const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { CommonError } = require("../utils");


async function AddCity(req,res){
    try{
        const city=await CityService.AddCity(req.body)
        CommonError.SuccessResponse.data=city
        return res.status(StatusCodes.CREATED).json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res.status(error.statuscode).json(CommonError.ErrorResponse)
    }
}
async function DeleteCity(req,res){
    try{
        const city = await CityService.deleteCity(req.params.id);
        CommonError.SuccessResponse.data=city
        return res.status(StatusCodes.OK).json(CommonError.SuccessResponse)
    }
    catch(error){
        CommonError.ErrorResponse.error=error
        return res.status(error.statuscode).json(CommonError.ErrorResponse)
    }
}
async function GetAllCity(req, res) {
  try {
    const allcity = await CityService.GetAllCity();
    CommonError.SuccessResponse.data = allcity;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id,req.body);
    CommonError.SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}


module.exports = { AddCity, DeleteCity, GetAllCity, updateCity };