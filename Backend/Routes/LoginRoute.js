const express = require('express');
const {login,EnterDashboard} = require('../Controllers/LoginController');
const authMiddleWare = require('../config/auth.js');

const router = express.Router();

router.post('/',login);
module.exports = router;