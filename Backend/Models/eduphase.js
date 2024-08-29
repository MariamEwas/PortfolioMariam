const mongoose =require('mongoose');

const EduphaseModel = mongoose.Schema({
   id:Number,
   desc:String,
   courses:[{coursename:String,shortdesc:String}]
});

const Eduphase = mongoose.model('educationphase',EduphaseModel);
Eduphase.syncIndexes();

module.exports = Eduphase;