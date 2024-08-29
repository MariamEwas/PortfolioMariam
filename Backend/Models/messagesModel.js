const mongoose = require('mongoose');

const MessagesSchema = mongoose.Schema({
    SenderName:String,
    SenderEmail:String,

    Message:String
},{
    timestamps:true
})

const MessagesModel = mongoose.model('messages',MessagesSchema);

module.exports= MessagesModel;
