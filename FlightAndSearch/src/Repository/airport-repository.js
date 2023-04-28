
const crudRepository = require('./crud-repository');
const {Airpot} = require('../models/index');

class AirportRepository extends crudRepository{

    constructor(){
        
       super(Airpot);
    }
}

module.exports = AirportRepository;