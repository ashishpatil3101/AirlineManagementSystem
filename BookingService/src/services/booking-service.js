const { bookingRepository} = require('../repository/index');
const axios=  require('axios');
// const f = require('../../../FlightAndSearch/src/Repository/flight-repository')


class BookingService{
  
    constructor(){
        this.BookingRepository= new bookingRepository();
    }

    async createBooking (data) {

        try {
            
            const flightId = data.flightId;
            const getFlightRequestURL = `http://localhost:3000/Api/v1/flights/${flightId}`;
            
             const response = await axios.get(getFlightRequestURL);
             
             const flight_details = response.data.data;
             let priceOfFlight = flight_details.price;
             
             if ( flight_details.totalSeats  < data.noOfSeats ){

                throw   ('please choose correct no of seats');
             }
             const totalCost = data.noOfSeats * priceOfFlight;
             const bookingPayload = {...data, totalCost};

             const booking = await this.BookingRepository.create( bookingPayload );

             const updateFlightrequestURL = `http://localhost:3000/Api/v1/flights/${flightId}`;

             await axios.patch(updateFlightrequestURL,{totalSeats: flight_details.totalSeats - data.noOfSeats})
             
             const finalBooking = await this.BookingRepository.update(booking.id , {status: 'Booked'});

             return finalBooking;

            
            
        } 
        catch (error) {
            console.log('somethings wrong in service layer');
            throw error;
            
        }
    }

}

module.exports = BookingService;