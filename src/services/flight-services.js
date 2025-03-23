const { AppError } = require("../utils");
const { FlightRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const flightrepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightrepository.create(data);
    return flight;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAllFlights(query) {
  let customFilter = {};
  let sortingFilter = {};

  if (query.trips) {
    // MUM-DEL
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    // TODO: departureAirportId and arrivalAirportId should not be same
  }

  if (query.price) {
    const [minprice, maxprice] = query.price.split("-");
    customFilter.price = { $gte: minprice, $lte: maxprice };
  }

  if (query.travellers) {
    customFilter.totalSeats = { $gte: parseInt(query.travellers) };
  }

  if (query.tripDate) {
    const targetDate = new Date(query.tripDate); // Target date
    const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0)); // 00:00
    const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999)); // 23:59
    customFilter.departureTime = { $gte: startOfDay, $lte: endOfDay };
  }

  if (query.sort) {
    const sortorder = { ASCE: 1, DESC: -1 };
    const sortList = query.sort.split(",").map((el) => el.split("_"));
    sortList.forEach((el) => {
      sortingFilter[el[0]] = sortorder[el[1]];
    });
  }
  try {
    const flights = await flightrepository.getAll(customFilter, sortingFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data from all flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getFlight(id) {
  try {
    let flight = await flightrepository.get(id);
    return flight;
  } catch (error) {
    if (error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The flight you requested is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot fetch data from all flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function deleteFlight(id) {
  try {
    let flight = await flightrepository.delete(id);
    flight.msg = `the airplane with id ${id} deleted successfullly`;
    return airplane;
  } catch (error) {
    if (error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The flight you requested to delete is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Not able to find the flight with provided id",
      StatusCodes.NOT_FOUND
    );
  }
}
async function updateFlight(id, data) {
  try {
    let flight = await flightrepository.update(id, data);
    return { msg: `the airplane with id ${id} updated successfullly` };
  } catch (error) {
    if (error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The flight you requested to update is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Not able to find the flight with provided id",
      StatusCodes.NOT_FOUND
    );
  }
}

async function updateSeats(id, seat, dec) {
  try {
    console.log(id, seat, dec)
    const response = await flightrepository.updateRemainingSeats(id, seat, dec)
    return response
  } catch (error) {
    if (error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The flight you requested to update is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Not able to find the flight with provided id",
      StatusCodes.NOT_FOUND
    );
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  deleteFlight,
  updateFlight,
  updateSeats
};

