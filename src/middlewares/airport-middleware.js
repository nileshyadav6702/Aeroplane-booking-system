const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { ErrorResponse } = require("../utils/common");

function validatecreateairport(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating the airport;";
    ErrorResponse.error = new AppError(
      ["name of airport is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating the airport;";
    ErrorResponse.error = new AppError(
      ["code of airport is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating the airport;";
    ErrorResponse.error = new AppError(
      ["cityId of airport is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validatecreateairport };
