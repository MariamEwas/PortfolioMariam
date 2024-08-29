const mongoose =require('mongoose');

const ExpSchema = mongoose.Schema({
    id:Number,
    name:String,
    year:Number,
    rule:String,
    desc:String,
});

const Exp=mongoose.model('Experience',ExpSchema);
Exp.syncIndexes();

module.exports = Exp;