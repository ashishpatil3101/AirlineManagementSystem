

const userController = require('../../controllers/user-controller');
const {AuthValidators} = require('../../middlewares/index');
const express = require('express');
const router = express.Router();

router.post('/signup',
     
     AuthValidators.validateUserAuth,
     userController.create
     );
router.post('/signin',
     AuthValidators.validateUserAuth, 
     userController.signIn
     );

router.get('/isAuthenticated',userController.isAuthenticated);

router.get('/isAdmin', 
     AuthValidators.adminValidate,
     userController.isAdmin 
     );

module.exports = router;