const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', validateRequest, createUser);
router.put('/:id', validateRequest, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
