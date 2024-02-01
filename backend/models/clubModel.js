const mongoose = require('mongoose')

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
  admin: { type: Schema.Types.ObjectId, ref: 'User',required:true}
})

module.exports = mongoose.model('Club',clubSchema)