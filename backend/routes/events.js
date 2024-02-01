const express = require('express')

const Event = require('../models/eventModel')
const { createEvent, getEvents, getEventById, deleteEvent, updateEvent, getEventsByClub } = require('../controllers/eventController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()


//GET all events
router.get('/', getEvents)


//GET single event
router.get('/:id',  getEventById)
 router.get('/club/:id',getEventsByClub)
router.use(requireAuth)
router.post('/', createEvent)
 
router.delete('/:id', deleteEvent)
 
router.patch('/:id',updateEvent)

module.exports = router