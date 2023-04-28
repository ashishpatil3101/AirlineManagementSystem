
const {FlightRepository, AirplaneRepository} = require('../Repository/index');
const {compareTime} = require('../Utils/helper');


class FlightService{

    constructor(){
        this.airplanerepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();

    }

    async createFlight(data){

        try {
            
            if( !compareTime(data.arrivalTime , data.departureTime)) {

                throw {error: "arrival-time should be greater than departure-time"};

            }
            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.flightrepository.createFlight( {...data , totalSeats: airplane.capacity} );

            return flight;
        } 
        catch (error) {
            
            console.log("something is wrong in service layer");
            throw(error);
        }
    }
    async getAllFlightData(data){

        try {
            
            const flights = await this.flightrepository.getAllFlights(data);

            return flights;
        } catch (error) {
            
            console.log("something is wrong in service layer");
            throw error;
        }
    }

    async getFlight( flightId){

        try {
            
            const flight = await this.flightrepository.getFlight( flightId );
            
            return flight;
        } 
        catch (error) {
            
            console.log("something is wrong in service layer");
            throw error
        }
    }

    async updateFlight( flightId ,data ){
         
        try {
            
            const response = await this.flightrepository.updateFlight( flightId ,data );
            
            return response;
        } 
        catch (error) {
            
            console.log("something is wrong in service layer");
            throw error
        }

    }

}

module.exports = FlightService;