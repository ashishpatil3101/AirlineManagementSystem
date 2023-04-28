
const express = require('express');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');

const {User,Role} =  require('./models/index');
const db=  require('./models/index');

const App = express();

const PrepareAndStartserver = () => {


    App.use(bodyParser.json());
    App.use(bodyParser.urlencoded({extended: true}));
    
    App.use('/Api',apiRouter);

    App.listen(3001, async () =>{
      
        console.log("authrization server has started on PORT 3001");
      
    });

};

PrepareAndStartserver();