const {Airplane} = require('../models/index');

class AirplaneRepository{

    async getAirplane( Aid ){

        try {
            
            const airplane = await Airplane.findOne( {
                where: {
                    id: Aid
                }
            });

            return airplane;
        } catch (error) {
            
            console.log("something is wrong in repository");
            throw(error);
        }
    }
}

module.exports = AirplaneRepository;