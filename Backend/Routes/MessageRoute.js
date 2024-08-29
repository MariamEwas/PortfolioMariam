const express = require('express');
const {sendMessage, getMessages} = require('../Controllers/MessageController');
const router = express.Router();

router.post('/',sendMessage);
router.get('/',getMessages);
module.exports=router;


