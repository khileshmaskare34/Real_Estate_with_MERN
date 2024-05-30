const express = require('express');
const { verifyToken } =  require('../utils/verifyUser.js');
const { deleteUser, getUser, getUserListings, updateUser, test } =  require('../controllers/user.controller.js');


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

module.exports = router;