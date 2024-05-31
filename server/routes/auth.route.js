const { signup, signin, google, signOut } = require('../controllers/auth.controller');
const express = require('express')

const router = express.Router();

router.get('/add', (req, res) =>{
 res.send("hii")
})
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

module.exports = router;