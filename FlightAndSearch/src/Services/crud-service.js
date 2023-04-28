
class CrudService{

    constructor( repository ){
        this.repository = repository;
    }

    async create(data){

        try {
            const result = await this.repository.create(data);

            return result;
            
        } 
        catch (error) {
            
            console.log("somethings wrong in crud layer");
            throw error;
        }

    }

    async destroy( id ){

        try {

            const result = await this.repository.destroy( id );

            return result;
            
        } 
        catch (error) {
            console.log("somethings wrong in crud layer");
            throw error;
        }


    }
    async get( id ){

        try {

            const result  = await this.repository.get(id);
            return result;
            
        } 
        catch (error) {
            console.log("somethings wrong in crud layer");
            throw error;
        }


    }

    async getAll(){

        try {
            
            const result = await this.repository.getAll();

            return result;
        } 
        catch (error) {
            console.log("somethings wrong in crud layer");
            throw error;
        }


    }

    async update( id ,data){

        try { 

            const result = await this.repository.update( id, data);

            return result;
            
        } 
        catch (error) {
            console.log("somethings wrong in crud layer");
            throw error;
        }


    }
}
module.exports = CrudService;