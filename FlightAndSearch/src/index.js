
const express =require('express');
const bodyParser = require('body-parser');

const {PORT}  = require('./config/ServerConfig');
const ApiRout = require('./routes/index');

const SetAndStartServer = async() => {

    const App = express();
    
    App.use(bodyParser.json());
    App.use(bodyParser.urlencoded({extended: true}));
    
    App.use('/Api' , ApiRout);

    App.listen( 3000, () =>{
        console.log("flight search server has Started  on port 3000",);
       
    });
};

SetAndStartServer();