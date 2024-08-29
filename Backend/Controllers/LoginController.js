const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.login = async(req,res)=>{
    try{   
    const {name,password} = req.body;

        console.log(name, password);
    if (!(name === 'Mariam Hasan' || name ==='Eng Ahmed Zayed'))
        return res.status(401).send('Name is wrong');

    if (password !== '123456'){
        console.log(password , '123456' , password==='123456')
        return res.status(402).send('Password is wrong');
    }
    const token = jwt.sign(
         { userId: 1, userType: 'admin' },process.env.secret_key,{expiresIn:'1h'}
    )
        return res.status(200).json(token);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
}

