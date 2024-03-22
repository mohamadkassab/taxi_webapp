import  express  from 'express';
import {Post} from '../controllers/BookFormController.js';
const router = express.Router();
 

router.post("/", Post);

export {router as BookFormRoute};


