const express = require('express');
const {getPhases,deletePhase,editPhase,addPhase} = require('../Controllers/EduphaseController');
const router = express.Router();

router.get('/',getPhases);
router.put('/',editPhase);
router.post('/',addPhase);
router.delete('/:id',deletePhase);
module.exports=router;


