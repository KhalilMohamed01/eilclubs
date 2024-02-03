const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required:true
    },
    poster: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required:true
    },
    club_id : {
        type:String,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event',eventSchema)