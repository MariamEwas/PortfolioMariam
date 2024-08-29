const multer = require('multer');

const storage = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,'uploads'); // (error/null - distenation)
    },
    filename : (req,file,cb) => {
        cb(null,Date.now() + "_" + file.originalname); //(error -name of the file that we want to save on the folder 'uploads')
    }

});
const upload = multer({storage});

//module.exports = storage;
module.exports = upload; 