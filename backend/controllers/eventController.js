const Event = require('../models/eventModel')
const mongoose = require('mongoose')

//get all events
const getEvents = async (req, res) => {
    const events = await Event.find({}).sort({date:-1})
    res.status(200).json(events)
}

//get events by clubid
/*const getEventsByClub = async (req,res) => {
    const {id} =  req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'ClubID is not valid'})
    }
  
    const events = await Event.find({clubid:id})
  
    if (!events) {
      return res.status(404).json({error:id})
    }
  
    res.status(200).json(events)
  }
*/
//geteventbyid
const getEventById = async (req, res) => {
    const { id } = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such event'})
    }
    const event = await Event.findById(id)

    if (!event) {
        return res.status(404).json({error:'No such event'})
    }
    res.status(200).json(event)
}


//add new event
const createEvent = async (req, res) => {
    const { title, desc, poster, date } = req.body

    //add doc to DB
    try {
        const event = await Event.create({ title, desc, poster, date })
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error})
    }
}

//delete event
const deleteEvent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such event'})
    }

    const event = await Event.findOneAndDelete({ _id: id })
    if (!event) {
        return res.status(404).json({ error: 'No such event' })

    }

    res.status(200).json(event)
}

//update event
const updateEvent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such event'})
    }

    const event = await Event.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!event) {
        return res.status(404).json({ error: 'No such event' })

    }

    res.status(200).json(event)
}



module.exports = {
    getEvents,
    getEventById,
    createEvent,
    deleteEvent,
    updateEvent
}