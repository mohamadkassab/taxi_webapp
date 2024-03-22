import nodeMailer from 'nodemailer';
import { config } from 'dotenv';
import {ContactFormModel} from '../models/ContactFormModel.js';
import {BookFormModel} from '../models/BookFormModel.js'



class  MailService {

    constructor(){
        config();
         this.mailTransporter = nodeMailer.createTransport({
                service: "gmail",
                auth:{
                    user: process.env.GMAIL_USERNAME,
                    pass: process.env.GMAIL_PASSWORD
                },
                timeout: 10000 
            });
    }

     async ContactFormSend(req) {

        try
        {
           const {name,email,sub,message} = req.body;
           const newContact = new ContactFormModel({name, email, sub, message});
           await newContact.save(); 
           const details = {
                           from: "blackhorse.tls@gmail.com",
                           to: "blackhorse.tls@gmail.com",
                           subject: "Black horse contact form: " + name,
                           text: JSON.stringify(message, null, 2).replace(/\\n/g, '\n')
               
                       }
                 
                        this.mailTransporter.sendMail(details,(err)=>{
                        if(err){
                            //insert into database 
                      
                        }
                     
                    });
                       return true;
                
        }
        catch(err)
        {   
            return false;
        }
 
    }  


    async BookFormSend(req) {

        try
        {       
            const {name,email,mobile,pickuppoint,droppoint,pickupdate,pickuptime,selecttaxi,numofpass} = req.body;
		    const newBooking = new BookFormModel({name, email, mobile, pickuppoint, droppoint, pickupdate, pickuptime, selecttaxi, numofpass});
	    	await newBooking.save();
            const details = {
                			from: "blackhorse.tls@gmail.com",
                			to: "blackhorse.tls@gmail.com",
                			subject: "Black horse booking form: "+ name,
                			text: JSON.stringify(newBooking, null, 2).replace(/\\n/g, '\n')
                            
                		}
                 
                        this.mailTransporter.sendMail(details,(err)=>{
                        if(err){
                            //insert into database 
                      
                        }
                    });
                       return true;
                
        }
        catch(err)
        {   
            return false;
        }
 
    }  

  }

  export {MailService};