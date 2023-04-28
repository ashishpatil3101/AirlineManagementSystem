const userService  = require('../services/user-service');

const user_service  = new userService();

const create = async ( req ,res ) => {

    try {
           
        const user = await user_service.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({

            data: user,
            success: true,
            message: "successfully created user"
        });
    } 
    catch (error) {
        console.log("something is wrong is controller layer ");
        return res.status(500).json({
            error: error,
            message: "not  able to create user"

        });
    }
}

const signIn = async ( req, res ) =>{

    try {
    
        const response = await user_service.signIn( req.body.email, req.body.password);

        return res.status(200).json({
            data: response,
            success: true,
            message: "sing in successfully"
        });
    } 
    catch (error) {
        
        console.log("something is wrong is controller layer ");
        return res.status(500).json({
            error: error,
            message: "not  able to sign in"

        });
    }
}

const isAuthenticated = async ( req, res ) =>{

    try {
    
        const token =req.headers['x-access-token'];
        
       const response = await user_service.isAuthenticated( token );
        

        return res.status(200).json({
           
            success: true,
            message: 'user is authenticated and token is valid',
            data: response
        
        });

    } 
    catch (error) {
      
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
          
            error: error,
            message: "not  able to authenticated "

        });
    }
}

const isAdmin = async (req, res) =>{

    try {
        
        const result  = await user_service.isAdmin( req.body.userId);

        return res.status(200).json({
           
            data: result,
            success: true,
            message: 'successfully fetched whether user is admin or not'
      
        });
    } 
    catch (error) {
        
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
         
            error: error,
            message: "user is not Admin "
      
        });
    }
}

module.exports ={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}