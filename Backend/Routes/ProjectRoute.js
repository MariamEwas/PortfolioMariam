const express = require('express');
const router = express.Router();
const upload = require('../config/multerConifg'); 
const {getProjects, editProject, imgUpload,addProject, deleteProject, UploadImgToFrontend, UploadImage} = require('../Controllers/ProjectController');

router.get('/',getProjects);
router.put('/',editProject);
// router.put('/imgUpload',upload.single('filename'),imgUpload);
router.post('/',addProject);
router.delete('/:id',deleteProject);
router.post('/upload', upload.single('image'),UploadImgToFrontend);
router.post('/imgUpload',upload.single('filename'),UploadImage);
// router.post('/upload', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const imageUrl = `/uploads/${req.file.filename}`; // Construct the image URL

//     // You can save the imageUrl to the database if needed

//     res.status(200).json({ imageUrl: imageUrl });
// });

module.exports = router;