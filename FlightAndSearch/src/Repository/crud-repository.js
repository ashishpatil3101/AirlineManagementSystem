class crudRepository{

    constructor(model){
        this.model=model;
    }

    async create( data ){
       
        try {

            const result = await this.model.create(data);

            return result;

        } catch (error) {
            
            console.log('something wrong in crud-repository');
            throw error;
        }
    }

    async delete ( modelId){
        
        try {
            
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });

            return result;
            
        } catch (error) {
            
            console.log('something wrong in crud-repository');
            throw error;
        }
    }
    async get( modelId ){
      
        try {

            const result = await this.model.findOne({
                where: {
                    id: modelId
                }
            });

            return result;
            
        } catch (error) {
            
            console.log('something wrong in crud-repository');
            throw error;
        }

    }
    async getAll(){
      
        try {

            const result = await this.model.findAll();
            return result;
            
        } catch (error) {
            
            console.log('something wrong in crud-repository');
            throw error;
        }

    }

    async update(id,data){

        try {
            const result = await this.model.update( data ,{
                where: {
                    id: id
                }
            } );
  
            return result;
        } 
        catch (error) {
              
          console.log("something went wrong in repository layer");
          throw {error};
  
        }
    }

}

module.exports = crudRepository;