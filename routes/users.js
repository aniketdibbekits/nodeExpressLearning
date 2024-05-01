const express = require('express')

const {getUsers, createUser, updateUser,deleteUser} = require('../controllers/users')
const router =express.Router();
//POST operation
router.post('/users', createUser)
  
  //Patch operation
  router.patch('/users/:id', updateUser)
  //Delete operation
  router.delete('/users/:id',deleteUser)
  
  //Read operation & search
  router.get('/users',getUsers)
  
  module.exports = router;