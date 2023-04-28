
const {NotificationTicket } =  require('../models/index');
const {Op} = require('sequelize');

class ticketRepository{

    async getAll(){

        try {
            
            const ticket  =  await NotificationTicket.findAll();

            return  ticket;
        }
         catch (error) {
            
           console.log('something is wrong in repository layer')

           throw error;
        }
    }

    async create( data ){

        try {
            
            const ticket =  await NotificationTicket.create( data );
            
            return ticket;
        } 
        catch (error) {
            
            console.log('somethings wrong in  repository layer');
            throw error;
        }
    }
    async get( filter ){
        
        try {
            
            const tickets  = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });

            return  tickets;
        } 
        catch (error) {
            
            console.log('somethings wrong in  repository layer');
            throw error;
        }
    }
    async update( ticketId ,data ){

        try {
            
            await NotificationTicket.update(data, {
                where: {
                    id: ticketId
                }
            });

            return true;
        } 
        catch (error) {
           
            console.log('somethings wrong in  repository layer');
            throw error;
        }
    }
}

module.exports = ticketRepository;