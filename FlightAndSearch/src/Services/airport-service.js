
const crudService = require('./crud-service');

const {AirportRepository} = require('../Repository/index');

class AirportService extends crudService{

    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;