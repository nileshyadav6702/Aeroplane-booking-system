const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { ErrorResponse } = require("../utils/common");

function validatecreateflight(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["flightNumber is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["airplaneId is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["departureflightId  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["arrivalflightId  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["departureTime  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["arrivalTime  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["price  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating the flight;";
    ErrorResponse.error = new AppError(
      ["totalSeates  is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateupdateseat(req, res, next) {
  if(!req.body.seats) {
    ErrorResponse.message = 'Something went wrong while updating the seats'
    return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse)
  }
  next()
}
module.exports = { validatecreateflight, validateupdateseat };
