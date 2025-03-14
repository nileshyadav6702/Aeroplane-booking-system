const CrudRepository = require("./crud-repository");
const { FlightModel } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(FlightModel);
  }
}

module.exports = FlightRepository;
