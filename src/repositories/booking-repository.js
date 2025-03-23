const CrudRepository = require("./crud-repository");
const { BookingModel } = require("../models");

class BookingRepository extends CrudRepository {
  constructor() {
    super(BookingModel);
  }
}

module.exports = BookingRepository;
