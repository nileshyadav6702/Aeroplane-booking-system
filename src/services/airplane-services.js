const { AppError } = require('../utils')
const {AirplaneRepository}=require('../repositories')
const {StatusCodes}=require('http-status-codes')

const airplanerepository=new AirplaneRepository()

async function createairplane(data){
    try{
        const airplane=await airplanerepository.create(data)
        return airplane
    }
    catch(error){
        if(error.errors.name=='ValidationError'){
            console.log('error occured')
            let explanation=[]
            error.erros.forEach((err)=>{
                explanation.push(err.message)
            })
            // console.log(explanation)
            throw new AppError(error.errors,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create an airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllAirplanes(){
    try{
        let airplanes = await airplanerepository.getAll();
        return airplanes
    }
    catch(error){
        throw new AppError('Cannot fetch data from all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirPlane(id){
    try{
        let airplane = await airplanerepository.get(id);
        return airplane
    }
    catch(error){
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not found',StatusCodes.NOT_FOUND)
        }
        throw new AppError('Cannot fetch data from all airplanes',StatusCodes.NOT_FOUND)
    }
}
async function deleteAirPlane(id){
    try{
        let airplane = await airplanerepository.delete(id);
        airplane.msg=`the airplane with id ${id} deleted successfullly`
        return airplane
    }
    catch(error){
         if (error.StatusCodes == StatusCodes.NOT_FOUND) {
           throw new AppError(
             "The airplane you requested to delete is not found",
             StatusCodes.NOT_FOUND
           );
         }
        throw new AppError('Not able to find the airplane with provided id',StatusCodes.NOT_FOUND)
    }
}
async function updateAirplane(id,data){
    try{
        let airplane = await airplanerepository.update(id,data);
        return { msg: `the airplane with id ${id} updated successfullly` };
    }
    catch(error){
         if (error.StatusCodes == StatusCodes.NOT_FOUND) {
           throw new AppError(
             "The airplane you requested to update is not found",
             StatusCodes.NOT_FOUND
           );
         }
        throw new AppError('Not able to find the airplane with provided id',StatusCodes.NOT_FOUND)
    }
}



module.exports = {
  createairplane,
  getAllAirplanes,
  getAirPlane,
  deleteAirPlane,
  updateAirplane,
};