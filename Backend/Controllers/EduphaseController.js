const Eduphase =require('../Models/eduphase');

exports.getPhases = async(req,res) =>{
    try{
        const phases = await Eduphase.find();
        console.log(phases);
        res.status(200).json(phases);
    }
    catch(err){
        res.status(401).send(err.message);
    }  
}

exports.deletePhase = async(req,res) => {
    const id = req.params.id;
    
    try {
      const result = await Eduphase.deleteOne({ id: id});
      
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Phase deleted successfully' });
      } else {
        res.status(404).json({ message: 'Phase not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete Phase', error });
    }
};

exports.addPhase = async (req,res) =>{
    try{
        const {id,desc,courses} = req.body;
        
        const newPhase={};
        if (id !== null && id !== undefined) newPhase.id = id;
        if (desc !== null && desc !== undefined) newPhase.desc = desc;
        if (courses) newPhase.courses = courses;
        console.log(newPhase);
        await Exp.create(newPhase);

        res.status(201).json(newPhase);
    }   
    catch(err){
        res.status(401).send(err.message);    
    }
}

exports.editPhase= async(req,res)=>{
    try{
        let phase= req.body;
        await Eduphase.findOneAndUpdate({id:phase.id},phase);
        
        res.status(200).send('updated !');
    }
    catch(err){
        res.status(401).send(err.message);
    }
}



