import {inquiry} from "../database/connection.js";

class selectionRepository {
    create(selections){
        const sql = "INSERT INTO selections SET ?;"
         return inquiry(sql , selections , "Unable to register");  
    }

    findAll(){
        const sql = "SELECT * FROM selections;"
         return inquiry(sql , "Unable to locate"); 
    }

    findById(id){
        const sql = "SELECT * FROM selections WHERE id=?;"
         return inquiry(sql , id , "Unable to locate"); 
    }

    update(selections, id){
        const sql = "UPDATE selections SET ? WHERE id=?;"
        return inquiry(sql , [selections, id] , "Unable to register"); 
     
    }

    delete(id){
        const sql = "DELETE FROM selections WHERE id=?;"
        return inquiry(sql , id , "Unable to delete"); 
    }
}

export default new selectionRepository() 
