
const {createNotification }=  require('../service/email-service');

const create = async( req,res ) =>{

    try {
        console.log('time',req.body.notificationTime);
        
        const response  =  await createNotification(req.body);

        return res.status(201).json({
            success: true,
            data:  response,
            messsage: "succesfully registered  an email reminder"
        });
    } 
    catch (error) {
        
        return  res.status(500).json({
            success: false,
            message: "not able to registered an email reminder",
            error

        });
    }
}
module.exports = {create};