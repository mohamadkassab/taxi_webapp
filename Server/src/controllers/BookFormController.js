import { MailService } from "../services/MailService.js";

async function Post(req, res){
 
    const mail = new MailService();
    const response = await mail.BookFormSend(req);

        if(response === true) 
        {
            res.status(200).send("success");
        }
        else
        {          
            res.status(400).send('error');
        }
}

export{Post};