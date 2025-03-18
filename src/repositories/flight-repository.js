const CrudRepository = require("./crud-repository");
const { FlightModel } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(FlightModel);
  }
  async getAll(filter, sort) {
    const response = await FlightModel.find(filter)
      .sort(sort)

    return response;
  }
}

module.exports = FlightRepository;
