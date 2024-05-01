const User = require('../models/users')
const getUsers = async (req,res)=>{
    try{
      const users = await User.find(req.query);
      console.log(users);
      res.json({
        status:"Success",
        data : users
        
      })
  
    } catch(err){
      res.status(500).json({
        staus:'failed',
        message:'Something went wrong'
      })
    }
  
  }

  const createUser = async (req,res)=>{
    try{
      const {firstName, lastName, email, avatar} = req.body;
      const users = await User.create({firstName, lastName, email, avatar});
      res.json({
        status:"SUCCESS",
        message : "User Created Successfully"
        
      })
  
    } catch(err){
      res.status(500).json({
        staus:'failed',
        message:'Something went wrong'
      })
    }
  
  }

  const updateUser = async (req,res)=>{
    try{
      const {id} = req.params;
      const {firstName, lastName, email, avatar} = req.body;
      const users = await User.findByIdAndUpdate(id,{firstName, lastName, email, avatar});
      res.json({
        status:"SUCCESS",
        message : "User Updated Successfully"
        
      })
  
    } catch(err){
      res.status(500).json({
        staus:'failed',
        message:'Something went wrong'
      })
    }
  
  }

  const deleteUser = async (req,res)=>{
    try{
      const {id} = req.params;
      const users = await User.findByIdAndDelete(id);
      res.json({
        status:"SUCCESS",
        message : "User Deleted Successfully"
        
      })
  
    } catch(err){
      res.status(500).json({
        staus:'failed',
        message:'Something went wrong'
      })
    }
  
  }


  module.exports={
    getUsers,
    createUser,
    updateUser,
    deleteUser


  }