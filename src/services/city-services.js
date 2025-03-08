const { AppError } = require("../utils");
const { CityRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const cityrepository = new CityRepository();


async function AddCity(data){
    try{
        const city=await cityrepository.create(data)
        return city
    }
    catch(error){
        throw new AppError('city is already present can not create another with same name',StatusCodes.BAD_REQUEST)
    }
}
async function GetAllCity(){
    try{
        const city=await cityrepository.getAll()
        return city
    }
    catch(error){
        throw new AppError('error fetching all city from cities collections',StatusCodes.BAD_REQUEST)
    }
}
async function deleteCity(id){
    try{
        const city=await cityrepository.delete(id)
        city.msg=`Deleted the city with id ${id}`
        return city
    }
    catch(error){
        throw new AppError('City with following id is not found',StatusCodes.NOT_FOUND)
    }
}
async function updateCity(id,data){
    try{
        const city=await cityrepository.update(id,data)
        return { msg: `Updated the city with id ${id}` };
    }
    catch(error){
        throw new AppError('Can not able to fetch the city with this id',StatusCodes.NOT_FOUND)
    }
}

module.exports = { AddCity, deleteCity, GetAllCity,updateCity };