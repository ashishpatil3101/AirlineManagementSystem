
const {User ,Role}  = require('../models/index');

class UserRepository{
     
    async create ( data) {
         
        try {
            
            const user = await User.create(data);
            return user;
        } 
        catch (error) {
            
            console.log("something is wrong is repository");
            throw error;
        }
    }

    async destroy( userId ){
         
      
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });

            return true;
        } 
        catch (error) {

            console.log("something is wrong is repository");
            throw error;
            
        }
    }
    async getById( userId ){

        try {
          
            const user = await User.findByPk( userId,{
                attributes: ['email','id']
            });

            return user;
        }
         catch (error) {
            console.log("something is wrong is repository");
            throw error;
        }
    }

    async getByEmail( userEmail ){

        try {
        
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
         
            return user;
        } 
        catch (error) {
            console.log("something is wrong is repository");
            throw error;
        }
    }

    async isAdmin( userId ){

        try {
            
            const user = await User.findByPk(userId);
            const Admin_role = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });

            return user.hasRole(Admin_role);

        } 
        catch (error) {
            console.log("something is wrong is repository");
            throw error;
        }
    }
}

module.exports = UserRepository;