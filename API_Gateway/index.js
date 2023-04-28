
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan  = require('morgan');

const axios = require('axios');

const App =  express();

App.use( morgan('combined'));

App.use('/bookingservice', async (req,res,next) =>{
   
    const AuthURL = 'http://localhost:3001/Api/v1/isAuthenticated';

    try {
        const response = await axios.get(AuthURL , {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
    
        if( response.data.success) next();
        else return res.status(500).json({
            message: 'not able to authenticated'
            
        });
    } 
    
    catch (error) {
        return res.status(500).json({
            message: error.name,
            
        });
    }
    
   
    // console.log('hey',response.data.success);
    // next();
  
})

App.use('/bookingservice', createProxyMiddleware( { target: 'http://localhost:3002/', changeOrigin: true}));


App.get('/home', (req ,res ) =>{
       
    return res.json({message: 'ok'});

})

App.listen(3004 , () => {

    console.log("APi gateway server has started on port 3004");
})