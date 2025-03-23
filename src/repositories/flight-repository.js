const CrudRepository = require("./crud-repository");
const { FlightModel } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(FlightModel);
  }
  async getAll(filter, sort) {
    const response = await FlightModel.find(filter)
      .sort(sort)
      .populate("airplaneId")
      .populate("departureAirportId")
      .populate("arrivalAirportId")
      .populate("departureAirportId.cityId");

    return response;
  }

  async updateRemainingSeats(flightId, seat, dec = true) {

    let res
    if (dec) {
      res = await FlightModel.updateOne({ _id: flightId }, { $inc: { totalSeats: -seat } });
    } else {
      res = await FlightModel.updateOne({ _id: flightId }, { $inc: { totalSeats: seat } });
    }
    return res
  }
}

module.exports = FlightRepository;
