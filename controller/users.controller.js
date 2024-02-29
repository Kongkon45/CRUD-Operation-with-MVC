const {v4:uuidv4} = require('uuid');
const User = require('../models/users.model')
// all user 
const getAllUser = async (req, res)=>{
    try {
        const userData = await User.find()
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// single user 
const getSingleUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userData = await User.findOne({id:id})
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// create user 
const createUser = async (req, res)=>{
    try {
        const name = req.body.name;
        const age = req.body.age;
        const newUser = new User({
            id : uuidv4(),
            name : name,
            age : age
        });
        const userData = await newUser.save()
        res.status(201).json(userData)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// update user 
const updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        // const name = req.body.name;
        // const age = req.body.age ;
        const userData = await User.findByIdAndUpdate({
              _id:id
            })
              userData.name = req.body.name,
              userData.age = Number(req.body.age)
        await userData.save()
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// detele user 
const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userData = await User.findByIdAndDelete({_id:id})
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = { getAllUser, getSingleUser, createUser, updateUser, deleteUser }