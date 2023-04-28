const {AirportService} = require('../Services/index');

const airportService = new AirportService();

const create = async ( req ,res ) => {

    try {
        console.log(req.body);

        const airport = await airportService.create(req.body);
        return res.status(201).json({
           data: airport,
           success: true,
           message: "created airport successfully"
        })
        
    } 
    catch (error) {
        console.log('something is wrong in  controller layer');
         return res.status(500).json({
            data: {},
            error: error,
            message: "cannot  created airport"
         })
    }
};

module.exports = {
    create
}