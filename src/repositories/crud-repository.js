const { StatusCodes } = require("http-status-codes")
const { Logger } = require("../config")
const { AppError } = require("../utils")

class CrudRepository{
    constructor(model){
        this.model=model
    }

    async create(data){
        const response=await this.model.create({...data})
        return response
    }
    async delete(data){
        const response=await this.model.deleteOne({_id:data})
         if(!response){
            throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
         }
        return response
    }
    async get(data){
        const response=await this.model.findOne({_id:data})
        if(!response){
            throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
        }
        return response
    }
    async getAll(){
        const response=await this.model.find({})
        return response
    }
    async update(id,data){
        const response=await this.model.findOneAndUpdate({_id:id},{...data})
        return response
    }
}

module.exports=CrudRepository