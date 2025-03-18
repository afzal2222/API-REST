import { Router } from "express";
import selectionController from "./app/controllers/selectionController.js";

const router = Router(); 

router.get('/selections',selectionController.index); 
router.get('/selections/:id',selectionController.show); 
router.post('/selections',selectionController.store);
router.put('/selections/:id',selectionController.update);
router.delete('/selections/:id', selectionController.delete);

export default router
