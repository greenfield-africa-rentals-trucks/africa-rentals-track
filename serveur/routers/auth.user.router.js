const express = require('express');
const router = express.Router();
const Authcontroller = require('../controllers/auth.user.controllers.js')

router.post('/create',Authcontroller.createUser)
router.post('/login', Authcontroller.findUser)
router.get('/users', Authcontroller.FindAllUsers)

module.exports = router