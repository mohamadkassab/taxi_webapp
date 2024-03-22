import { config } from 'dotenv';
import mongoose from 'mongoose';

config();
const MongoDbPassword = process.env.MONGODB_PASSWORD;
let db;

const DbConnect = async () =>{
    if (db) return db;
    const url = `mongodb+srv://blackhorsedb:${MongoDbPassword}@cluster0.nfbjqkp.mongodb.net/blackhorse?retryWrites=true&w=majority`;
    while(true)
    {
        try{
            db = await mongoose.connect(
                url,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
                );
            return db;   
        }
        catch(error){
            throw error; // Rethrow the error to be handled by the caller
    
        }
    }
   
 
}

export {DbConnect};
