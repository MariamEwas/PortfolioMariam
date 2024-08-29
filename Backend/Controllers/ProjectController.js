const Project = require('../Models/projectModel');
const express = require ('express');
const app = express();

app.use(express.json());
// app.use('/uploads',express.static('./imgs')) ; (route , path)
app.use(express.urlencoded({ extended: true })); // to parse the body .. instead of body-parser

exports.getProjects = async(req,res) =>{
    try{
        const projects = await Project.find();
        res.status(200).json(projects);
    }
    catch(err){
        res.status(401).send(err.message);
    }
}

exports.editProject = async(req,res)=>{
    try{
        let project= req.body;
        const updatedProject = await Project.findOneAndUpdate({id:project.id},project);
        
        res.status(200).send('updated !');
    }
    catch(err){
        res.status(401).send(err.message);
    }
}

exports.addProject = async (req,res) =>{
    try{
        const {id,name,skills,desc,githubUrl,imageUrl} = req.body;
        
        const newProject={};
        if (id !== null && id !== undefined) newProject.id = id;
        if (name !== null && name !== undefined) newProject.name = name;
        if (desc !== null && desc !== undefined) newProject.desc = desc;
        if (imageUrl !== null && imageUrl !== undefined) newProject.imageUrl = imageUrl;
        if (githubUrl !== null && githubUrl !== undefined) newProject.githubUrl = githubUrl;
        if(skills.length !== 0) newProject.skills=skills;
        console.log(newProject);
        await Project.create(newProject);

        res.status(201).json(newProject);
    }   
    catch(err){
        res.status(401).send(err.message);    
    }
}

exports.imgUpload = async (req,res)=>{
    try{
     let id = req.body.id;
    // id = (Number)(id);
     const myFile = req.file.filename;
    //  console.log(myFile)
    //  console.log(id);
     await Project.findOneAndUpdate({id:id},{imageUrl:myFile});
     const p = await Project.findOne({id:id});
     console.log(p);
     const obj = {id,myFile};
     res.status(200).json(obj);
    }
    catch(err){
        res.status(401).json(err.message);
    }
 }


 exports.deleteProject = async(req,res) => {
    const id = req.params.id;
    
    try {
      const result = await Project.deleteOne({ id: id});
      
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Project deleted successfully' });
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete project', error });
    }
  };

  exports.UploadImage= async(req,res)=>{
    // cnosole.log("EE");
    try{
     const myFile = req.file.filename;
     const id = req.body.id;
    await Project.findOneAndUpdate({id:Number(req.body.id)},{imageUrl:myFile});
     res.json();
    }
    catch(err){
        res.status(401).send(err);
    }
 };



  exports.UploadImgToFrontend = async(req, res) => {
   
  };