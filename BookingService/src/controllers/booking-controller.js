const {bookingService} = require('../services/index');

const Booking_service = new bookingService();

const create =  async ( req,res) =>{

    try {
        
        const response =  await Booking_service.createBooking(req.body);

        return res.status(201).json({
            success: true,
            message: 'successfully created the flight',
            data: response
        });

    } 
    catch (error) {
        console.log('somethings wrong in controller layer',error);
        
        return res.status(500).json({
            success: false,
            message: 'not able to created the flight',
            data: {},
            error
        });
    }
};

module.exports = {
    create
}