const express = require('express');

const bodyParser = require('body-parser');
const  App =  express();
const {PORT} = require('./config/serverConfig');

const db = require('./models/index');

const Apiroutes = require('./routes/index');

const PrepareAndStartserver = () =>{

    App.use( bodyParser.json());
    App.use( bodyParser.urlencoded({extended: true}));
    
    App.use('/bookingservice/Api',Apiroutes);
 
    App.listen(3002,   async () =>{
        
        console.log(`airline booking service server has started on port 3002`);
        
      
    });
}
PrepareAndStartserver();