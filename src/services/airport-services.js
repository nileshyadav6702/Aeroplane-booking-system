const { AppError } = require("../utils");
const { AirportRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const airportrepository = new AirportRepository();


async function AddAirport(data){
    try{
        const airport=await airportrepository.create(data)
        return airport
    }
    catch(error){
        console.log(error)
        throw new AppError('error occured while creating airport object',StatusCodes.BAD_REQUEST)
    }
}

async function GetAllAirport(){
    try{
        const airports=await airportrepository.getAll()
        return airports
    }
    catch(error){
        throw new AppError('Error occured while fetching the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function GetAirport(id){
    try{
        const airport=await airportrepository.get(id)
        return airport
    }
    catch(error){
        throw new AppError('Error occured while fetching the airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function DeleteAirport(id){
    try{
        const airport=await airportrepository.delete(id)
        airport.msg=`The Airport with Id ${id} Deleted successfully`
        return airport
    }
    catch(error){
        throw new AppError('error occured while fetching the data',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports={AddAirport,GetAllAirport,GetAirport,DeleteAirport}