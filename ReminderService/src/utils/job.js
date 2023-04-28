const cron =  require('node-cron');
const sender =  require('../config/emailConfig');

const  ticketservice = require('../service/email-service');

const setupJobs =  () =>{

    cron.schedule( "*/100 * * * *",async ()=>{
        
        const response = await ticketservice.fetchPendingEmail();

        response.forEach(email => {

            sender.sendMail( {
               
                to: email.recepientEmail ,
                content: email.content,
                subject: email.subject
            }, async ( err, data) => {

                if( err ){
                    console.log(err);

                }
                else{
                    await ticketservice.updateTicket( email.id ,{status: "SUCCESS"});
                }
            });
           
            
        });

        console.log("all the reminers",response);
    } )
};

module.exports = setupJobs