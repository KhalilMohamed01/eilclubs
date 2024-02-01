const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

//login user
const loginUser = async (req,res) => {
    const {username,password} = req.body 
    
    try{
        const user= await User.login(username,password)
        const userid = user._id;
        const token = createToken(userid)
        res.status(200).json({username,userid,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//signup user

const signupUser = async (req,res) => {
    const {username,password} = req.body 
    
    try{
        const user= await User.signup(username,password)

        const token = createToken(user._id)
        res.status(200).json({username,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = { signupUser,loginUser}