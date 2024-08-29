const express = require('express');
const connectDB = require('./config/db');
const ProjectRoute = require('./Routes/ProjectRoute');
const ExpRoute = require('./Routes/ExpRoute');
const MessageRoute = require('./Routes/MessageRoute');
const eduphaseRoute = require('./Routes/eduphaseRoute');
const LoginRoute = require('./Routes/LoginRoute');
const upload = require('./config/multerConifg');
const path = require('path');
const cors = require('cors');
const PORT = 3000;
connectDB();


const app = express();
app.use('/uploads', express.static(path.join('portfolio_Mariam/Frontend_Portfolio/public', 'uploads')));

app.use(express.json());
app.use(cors());
app.use('/project',ProjectRoute);
app.use('/experience',ExpRoute);
app.use('/message',MessageRoute);
app.use('/educationphase',eduphaseRoute);
app.use('/login',LoginRoute);
app.get('/',async(req,res)=>{
    try{
        imageUrl = `uploads/${req.body.imageUrl}`;
        res.send(imageUrl);
    }
    catch(err){
        res.json(400).send(err.message);
    }
})



// Example route for handling image uploads

// app.use('/uploads', express.static('./Frontend_Portfolio/public'))

 


// // API to upload image
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.json({ file: req.file });
// });

app.listen(PORT,()=>
{console.log('Server is running on PORT 3000');}
);
