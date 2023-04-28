const sender =  require('../config/emailConfig');
const emailRepo = require('../repository/ticket-repository');

const repo = new emailRepo();

const sendEMail = (mailFrom ,mailTo, mailBody,mailSubject ) => {

    sender.sendMail({
        
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
};

const fetchPendingEmail = async () => {

    try {
        
        const response  =  await repo.get({status: 'PENDING'});

        return response;
    } 
    catch (error) {
        console.log('something is worng in service layer');
        throw error;
    }
}

const createNotification = async ( data ) =>{

    try {
        
        const response  =  await repo.create( data );
        return response;
        
    } 
    catch (error) {
        
        throw error;
    }
};

const updateTicket = async ( tikcetId , status ) =>{

    try {
        
        const ticket =  await repo.update( tikcetId , status);

        return ticket;
    } 
    catch (error) {
        console.log('something is worng in service layer');
        throw error;
    }
}

module.exports = {
    sendEMail,
    fetchPendingEmail,
    createNotification,
    updateTicket
}