const Club = require('../models/clubModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

//login user
const loginUser = async (req,res) => {
    const {username,password} = req.body    
    try{
        const club = await Club.login(username,password)
        const club_id = club._id;
        const token = createToken(club_id)
        res.status(200).json({club_id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//signup user

const signupUser = async (req,res) => {
    const data = req.body 
    let username = data.admin.username
    
    try{
        const club= await Club.signup(data.name,data.admin.username,data.admin.password)
        const club_id = club._id;
        const token = createToken(club._id)
        res.status(200).json({'_id':club_id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// get all events
const getClubs = async (req, res) => {
  const clubs = await Club.find({}).sort({date: -1})

  res.status(200).json(clubs)
}

const getClubByAdmin = async (req,res) => {
  const {id} =  req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'AdminID is not valid'})
  }

  const club = await Club.findOne({admin:id})

  if (!club) {
    return res.status(404).json({error: 'No such club with the given admin ID'})
  }

  res.status(200).json(club)
}
// get a single event
const getClub = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such club'})
  }

  const club = await Club.findById(id)

  if (!club) {
    return res.status(404).json({error: 'No such club'})
  }

  res.status(200).json(club)
}

// create a new event
const createClub = async (req, res) => {
 const {name,desc,logo,admin,members,socials} = req.body
  
  try {
    const club = await Club.create({name, desc, logo,admin,members,socials})
    res.status(200).json(club)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete an event
const deleteClub = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such club'})
  }

  const club = await Club.findOneAndDelete({_id: id})

  if(!club) {
    return res.status(400).json({error: 'No such club'})
  }

  res.status(200).json(club)
}

// update a event
const updateClub = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such club'})
  }

  const club = await Club.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!club) {
    return res.status(400).json({error: 'No such club'})
  }

  res.status(200).json(club)
}

module.exports = {
  getClubs,
  getClub,
  createClub,
  deleteClub,
  updateClub,
  getClubByAdmin,
  loginUser,
  signupUser
}