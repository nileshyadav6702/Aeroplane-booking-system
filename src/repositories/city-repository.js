const CrudRepository = require("./crud-repository");
const { CityModel } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(CityModel);
  }
}

module.exports = CityRepository;
