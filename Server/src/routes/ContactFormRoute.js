import  express  from 'express';
import {Post} from '../controllers/ContactFormController.js';
const router = express.Router();
 

router.post("/", Post);

export {router as ContactFormRoute};


