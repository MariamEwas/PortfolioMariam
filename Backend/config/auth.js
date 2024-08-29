const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret_key =process.env.secret_key;

const authMiddleWare = (req,res,next) => {
    const token = req.header('Authorization')?.
    replace('Bearer ','');
    console.log(token);
    if (!token){
        return res.status(401).json({error:'Access Denied'});
    }
    try{
        const verifiedtoken = jwt.verify(token,secret_key);
        req.user = verifiedtoken;
        next();
    }
    catch(err){
        return res.status(403).send('not Authorized');
    }
}

module.exports = authMiddleWare;




