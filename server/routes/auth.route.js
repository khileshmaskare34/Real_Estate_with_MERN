const { signup, signin } = require('../controllers/auth.controller');
const User = require('../models/user.model')
const express = require('express')

const router = express.Router();

router.get('/add', (req, res) =>{
 res.send("hii")
})
router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router;