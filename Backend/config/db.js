const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Portfolio');
        console.log('Connected to mvc1 database 1');
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = connectDB;