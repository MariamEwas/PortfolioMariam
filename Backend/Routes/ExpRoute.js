const express = require('express');
const {getExperience,editExperience,addExperience,deleteExperience} = require('../Controllers/ExpController');
const router = express.Router();

router.get('/',getExperience);
router.put('/',editExperience);
router.post('/',addExperience);
router.delete('/:id',deleteExperience);

module.exports = router;

