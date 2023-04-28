const validateUserAuth = ( req,res ,next) =>{

    if ( !req.body.email || !req.body.password){

        return res.status(500).json({
            error: "emailor password  is missing in request",
            success: false
        })
    }

    next();
};

const adminValidate = ( req,res,next ) =>{

    if( !req.body.userId ) return res.status(500).json({
        success: false,
        error: 'user id is not given'
    });

    next();
}

module.exports = {
    validateUserAuth,
    adminValidate
}