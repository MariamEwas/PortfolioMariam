const mongoose = require('mongoose');
const ProjectSchema = mongoose.Schema(
    {
        id:Number,
        name:String,
        skills:[String],
        desc:String,
        githubUrl:String,
        imageUrl:String, 
    }
);

const Project=mongoose.model('Project',ProjectSchema);
Project.syncIndexes();

module.exports = Project;
