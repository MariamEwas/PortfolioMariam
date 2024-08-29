const MessagesModel = require('../Models/messagesModel');

exports.sendMessage = async(req,res)=>{
    try{
        const {name,email,message} = req.body;

        const newMessage = await MessagesModel.create({"SenderName":name,"SenderEmail":email,"Message":message});

        res.status(201).json(newMessage);
    }   
    catch(err){
        res.status(401).send(err.message);    
    }

}

exports.getMessages = async(req,res)=>{
    try{
        const msg = await MessagesModel.find();
        
        res.status(200).json(msg);
    }
    catch(err){
        res.status(401).send(err.message);
    }
}