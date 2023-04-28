
const  {Booking} = require('../models/index');

class BookingRepository{

    async create( data ){

        try {
           
            const booking = await Booking.create(data);

            return booking;
        } 
        catch (error) {
            console.log('something is wrong in repository');
            throw error;
        }
    }

    async update( bookingId ,data){

        try {
            
            await Booking.update(data, {
                where: {
                    id: bookingId
                }
            });

            return true;
        } 
        catch (error) {
            console.log('something wrong in repository layer');
            throw  'something went wrong in updating the booking. please try later';
        }

    }
}
module.exports = BookingRepository;