
const {CityService} = require('../Services/index');

const City_service = new CityService();

const create = async (req , res) =>{

    try {
        
        const  city = await City_service.createCity( req.body );

        return res.status(201).json({
             data: city,
             success: true,
             maessage: 'succesfully create the city'
        });
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to create city'
        });
    }
}

const destroy = async (req , res) =>{

    try {
        
        const  response = await City_service.deleteCity( req.params.id );

        return res.status(200).json({
             data: response,
             success: true,
             maessage: 'succesfully delete the city'
        });
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to delete city'
        });
    }
}

const get = async (req , res) =>{

    try {
        
        const  city = await City_service.getCity( req.params.id );

        return res.status(200).json({
             data: city,
             success: true,
             maessage: 'succesfully fetched the city'
        });
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to fetched city ,in controller layer'
        });
    }
}

const update = async (req , res) =>{

    try {
        
        const  city = await City_service.updateCity( req.params.id , req.body );

        return res.status(200).json({
             data: city,
             success: true,
             maessage: 'succesfully update the city'
        });
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to update city'
        });
    }
}

const  getAll = async ( req, res ) =>{

    try {
      
        const cities = await City_service.getAllcities( req.query );
        
        return  res.status(200).json({
            data: cities,
            success: true,
            maessage: 'succesfully fetch the cities'
       });
    } 
    catch (error) {
        
        console.log(error);
        return res.status(500).json({
            success: false,
            maessage: 'Not able to fetch cities ,in controller layer'
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}