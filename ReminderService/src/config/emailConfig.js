
const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');


const sender = nodemailer.createTransport( {
    service: 'Gmail',
    auth: {
        
        user: "axmaple@gmail.com",
        pass: "pass"
        
    }
   
 } );

 module.exports = sender;