const express = require('express');
const { getAllUser, createUser, getSingleUser, deleteUser, updateUser } = require('../controller/users.controller');
const router = express.Router();

router.get('/', getAllUser );
router.get("/:id", getSingleUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete("/:id", deleteUser)


module.exports = router;