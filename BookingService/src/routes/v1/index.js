const express=  require('express');
const router = express.Router();

const {bookingController} = require('../../controllers/index');

router.get('/home', (req, res) =>{
    return res.json({message: 'welcome to the booking service'});
})
router.post('/bookings' , bookingController.create );

module.exports = router;