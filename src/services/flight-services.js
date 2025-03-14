const { AppError } = require('../utils')
const {FlightRepository}=require('../repositories')
const {StatusCodes}=require('http-status-codes')

const flightrepository = new FlightRepository();

async function createFlight(data){
    try{
        const flight=await flightrepository.create(data)
        return flight
    }
    catch(error){
        console.log(error)
        throw new AppError('Cannot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAllFlights(){
    try{
        let flights = await flightrepository.getAll();
        return flights
    }
    catch(error){
        throw new AppError('Cannot fetch data from all flights',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getFlight(id){
    try{
        let flight = await flightrepository.get(id);
        return flight
    }
    catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('The flight you requested is not found',StatusCodes.NOT_FOUND)
        }
        throw new AppError('Cannot fetch data from all flights',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function deleteFlight(id){
    try{
        let flight = await flightrepository.delete(id);
        flight.msg=`the airplane with id ${id} deleted successfullly`
        return airplane
    }
    catch(error){
         if (error.StatusCodes == StatusCodes.NOT_FOUND) {
           throw new AppError(
             "The flight you requested to delete is not found",
             StatusCodes.NOT_FOUND
           );
         }
        throw new AppError('Not able to find the flight with provided id',StatusCodes.NOT_FOUND)
    }
}
async function updateFlight(id,data){
    try{
        let flight = await flightrepository.update(id,data);
        return { msg: `the airplane with id ${id} updated successfullly` };
    }
    catch(error){
         if (error.StatusCodes == StatusCodes.NOT_FOUND) {
           throw new AppError(
             "The flight you requested to update is not found",
             StatusCodes.NOT_FOUND
           );
         }
        throw new AppError('Not able to find the flight with provided id',StatusCodes.NOT_FOUND)
    }
}



module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  deleteFlight,
  updateFlight,
};