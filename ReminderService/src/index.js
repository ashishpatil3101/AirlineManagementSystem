
const express=  require('express');
const bodyParser =  require('body-parser');

const ticketcontroller = require('./ticket-controller/ticketController');

const App =  express();

const {sendEMail} = require('./service/email-service')

const job  = require('./utils/job');

const setupAndStartServer = async () =>{

      App.use(bodyParser.json());
      App.use( bodyParser.urlencoded( { extended: true } ));

      App.post('/api/v1/tickets' ,ticketcontroller.create);

      App.listen(3003, () => {

        console.log("reminder sever has started on port 3003");
        job();
        // sendEMail('vabhsde3101@gmail.com' , 'ashishpatil3101@gmail.com','reminderservice','hey');
      })
};

setupAndStartServer();