const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator');

const Schema = mongoose.Schema

const memberSchema = new Schema({
    fname: {
        type: String,
        
    },
        lname: {
        type: String,
        
    },
            avatar: {
        type: String,
        
    },
                discord: {
        type: String,
        
    },
                
    
})
const socialSchema = new Schema({
    website: { type:String },
    instagram:{  type:String},
    discord: {  type:String } 
},{ _id : false })

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
    },
  isConfirmed: {
      type:Boolean
  }
})

const clubSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  desc: {
    type: String,
  },
  logo: {
    type: String,
  },
  socials: socialSchema,
  members: [memberSchema],
  admin: {
    type:userSchema,
    required:true
  }
})


// static signup method
clubSchema.statics.signup = async function (name,username, password) {

  if (!username || !password) {
    throw Error('All fields are required')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password  not strong enough')
  }
  const exists = await this.findOne({ 'admin.username':username })

  if (exists) {
    throw Error('username already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const club = await this.create({ name,'admin.username':username, 'admin.password': hash ,'admin.isConfirmed':false})

  return club
}

clubSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error('All fields are required')
  }
  const club = await this.findOne({ 'admin.username':username })



  if (!club) {
    throw Error('There is no user with such an username')
  }

  const match = await bcrypt.compare(password, club.admin.password)
  
  if (!match) {
    throw Error('Incorrect password')
  }
  
  return club._id
  
}




module.exports = mongoose.model('Club',clubSchema)