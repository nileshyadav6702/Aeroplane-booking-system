const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { CommonError } = require("../utils");

async function createFlight(req, res) {
  try {
    const {
      flightNumber,
      airplaneId,
      arrivalAirportId,
      departureAirportId,
      arrivalTime,
      departureTime,
      price,
      boardingGate,
      totalSeats,
    } = req.body;
    const flight = await FlightService.createFlight({
      flightNumber,
      airplaneId,
      arrivalAirportId,
      departureAirportId,
      arrivalTime,
      departureTime,
      price,
      boardingGate,
      totalSeats,
    });
    CommonError.SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function getFlights(req, res) {
  try {
    let allFlights = await FlightService.getAllFlights(req.query);
    CommonError.SuccessResponse.data = allFlights;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function getFlight(req, res) {
  try {
    let flight = await FlightService.getFlight(req.params.id);
    CommonError.SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function deleteFlight(req, res) {
  try {
    let flight = await FlightService.deleteFlight(req.params.id);
    CommonError.SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function updateFlight(req, res) {
  try {
    let flight = await FlightService.updateFlight(req.params.id, req.body);
    CommonError.SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
async function updateSeats(req, res) {
  try {
    const { seats , dec=true } = req.body
    let flight = await FlightService.updateSeats(req.params.id, seats, dec);
    CommonError.SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(CommonError.SuccessResponse);
  } catch (error) {
    CommonError.ErrorResponse.error = error;
    return res.status(error.statuscode).json(CommonError.ErrorResponse);
  }
}
module.exports = {
  createFlight,
  deleteFlight,
  updateFlight,
  getFlight,
  getFlights,
  updateSeats,
};
