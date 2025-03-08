const { StatusCodes } = require('http-status-codes');
const mongoose=require('mongoose');
const { CommonError, AppError } = require('../utils');

async function mongoidvalidator(req,res,next){
    var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    CommonError.ErrorResponse.error = new AppError(
      "the id send is not a valid id",
      StatusCodes.BAD_REQUEST
    );
    if(!isValid){
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json(CommonError.ErrorResponse);
    }
    next();
}

module.exports = mongoidvalidator;