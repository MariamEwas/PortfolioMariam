const Exp =require('../Models/expModel');

exports.getExperience = async(req,res) =>{
    try{
        const experience = await Exp.find();
        res.status(200).json(experience);
    }
    catch(err){
        res.status(401).send(err.message);
    }
}
exports.deleteExperience = async(req,res) => {
    const id = req.params.id;
    
    try {
      const result = await Exp.deleteOne({ id: id});
      
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Experience deleted successfully' });
      } else {
        res.status(404).json({ message: 'Experience not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete experience', error });
    }
};

exports.addExperience = async (req,res) =>{
    try{
        const {id,name,role,desc,year} = req.body;
        
        const newExp={};
        if (id !== null && id !== undefined) newExp.id = id;
        if (name !== null && name !== undefined) newExp.name = name;
        if (desc !== null && desc !== undefined) newExp.desc = desc;
        if (role !== null && role !== undefined) newExp.role = role;
        if (year !== null && year !== undefined) newExp.year = year;
        console.log(newExp);
        await Exp.create(newExp);

        res.status(201).json(newExp);
    }   
    catch(err){
        res.status(401).send(err.message);    
    }
}

exports.editExperience = async(req,res)=>{
    try{
        let exp= req.body;
        const updatedProject = await Exp.findOneAndUpdate({id:exp.id},exp);
        
        res.status(200).send('updated !');
    }
    catch(err){
        res.status(401).send(err.message);
    }
}