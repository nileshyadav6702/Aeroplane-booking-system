const CrudRepository=require('./crud-repository')
const {AirplaneModel}=require('../models')

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(AirplaneModel);
  }
}


module.exports = AirplaneRepository;