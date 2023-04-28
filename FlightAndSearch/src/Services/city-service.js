
const  {CityRepository} = require('../Repository/index');


class cityService{

    constructor(){

        this.cityRepository = new CityRepository();
    }

    async createCity( data ){

        try {
            
            const response =  await this.cityRepository.createCity( data );

            return response;

        } catch (error) {
            
            console.log("something went wrong in sevice layer");
            throw {err};
        }

    }

    async deleteCity( cityId ){

        try {
            
            const response =  await this.cityRepository.deleteCity( cityId );

            return response;
            
        } catch (error) {
            
            console.log("something went wrong in service layer");
            throw {err};
        }
    }

    async updateCity ( cityId ,data) {

        try {
            
            const response =  await this.cityRepository.updateCity( cityId ,data );

            return response;
            
        } catch (error) {
            
            console.log("something went wrong in service layer");
            throw {err};
        }
    }

    async getCity ( cityId ) {

        try {
            
            const response =  await this.cityRepository.getCity( cityId );

            return response;
            
        } 
        catch (error) {
           
            console.log("something went wrong in service layer");
            throw {err};
        }
     }

     async getAllcities ( filter ){

        try {
           
            const cities = await this.cityRepository.getAllcities( {name: filter.name} );
            
            return cities;
            
        } catch (error) {
            
            console.log("something went wrong in service layer");
            throw {err};
        }
     }


}

module.exports = cityService;