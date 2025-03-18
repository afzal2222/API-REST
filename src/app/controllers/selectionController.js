import selectionRepository from "../repositories/selectionRepository.js";

class selectionController{
    
    async index(req, res){
         const row = await selectionRepository.findAll();
         res.json(row);
    }
   
    async show(req, res){
         const id = req.params.id 
         const row = await selectionRepository.findById(id);
         res.json(row); 
    }

    async store(req, res){

        const selections = req.body
        const row = await selectionRepository.create(selections);
        res.json(row); 
    }

    async update(req, res){
  
        const id = req.params.id
        const selections = req.body
        const row = await selectionRepository.update(selections, id);
        res.json(row);
    }

    async delete(req,res){   

        const id = req.params.id
        const row = await selectionRepository.delete(id);
        res.json(row);
    }

}
export default new selectionController() 
