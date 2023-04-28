const userRepository = require('../repository/user-repository');

const {JWT_KEY} = require('../config/serverconfig');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');


class UserService{

    constructor(){
        this.user_repository= new userRepository();

    }

    async create (data){
        
        try {
            const user = await this.user_repository.create(data);

            return user;
        } 
        catch (error) {
            console.log("something is wrong  service layer ");
            throw error;
        }
    }

     createToken(user){

        try {
            
            const result = jwt.sign( user , ''+JWT_KEY,{expiresIn: '1h'});

            return result;
        } 
        catch (error) {
            console.log("something is wrong  service layer ");
            throw error;    
        }
    }

     verifyToken( token ){

        try {
           
            const response  = jwt.verify( token , ''+JWT_KEY);
            return response;
            
        } 
        catch (error) {
            console.log("something is wrong  service layer ",error);
            throw error;    
        }
    }
    async signIn(userEmail,userInputPassword){

        try {
        
            const user = await this.user_repository.getByEmail(userEmail);
            
            const passwordMatch = this.checkPassword( userInputPassword, user.password);
            
           
            
            if( !passwordMatch){
                console.log("incorrect password");
                throw {error: "incorrect password"};
            }

            const newJwt = this.createToken( {email: user.email, id: user.id} )
        
            return newJwt;
        }
         catch (error) {
            console.log("something is wrong  service layer ",error);
            throw error; 
        }
    }

    checkPassword( userInputPassword, encryptedPassword){

        try {
            
            return bcrypt.compareSync( userInputPassword,encryptedPassword);
        } 
        catch (error) {
            
            console.log("password does not match");
            throw error;
        }
    }

    async isAuthenticated( token){

        try {
            
            const response = this.verifyToken( token );
           
            if( !response ){
                throw {error: "invalid token"}
            }
            const user = await this.user_repository.getById( response.id);
            if(!user) {
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error;
        }
    }
    
    async isAdmin( userId){

        try {
            
            return await this.user_repository.isAdmin( userId);
        } 
        catch (error) {
            console.log("something is wrong  service layer");
            throw error; 
        }
    }
    
}



module.exports = UserService;