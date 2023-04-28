
const  {FlightService}  = require('../Services/index');

const flightservice = new FlightService();

const create =  async (req, res) =>{

    try {
        
        const flight = await flightservice.createFlight(req.body);

        return res.status(201).json({
            data: flight,
            success: true,
            maessage: 'succesfully created the flight'
       });
    } 
    catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to create flight',
            error
        });
    }
}

const getAll = async (req, res) => {

    try {
        
        const flights = await flightservice.getAllFlightData(req.query);

        return res.status(200).json({
            data: flights,
            message: "flights data fetched succesfully",
            success: true
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to get All flights',
            error
        });
    }
};

const get = async (req, res) => {

    try {
        
        const flight = await flightservice.getFlight(req.params.id);

        return res.status(200).json({
            data: flight,
            message: "flight data fetched succesfully",
            success: true
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to get All flight',
        
        });
    }
};

const update = async ( req ,res) =>{
     
    try {
        
        const flight = await flightservice.updateFlight( req.params.id , req.body );

        return res.status(200).json({
            data: flight,
            message: "flight data updated succesfully",
            success: true
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to update  flight',
        
        });
    }

}

module.exports = {
    create,
    getAll,
    get,
    update
}