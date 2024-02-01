const express = require('express')
const {
  getClubs, 
  getClub, 
  createClub, 
  deleteClub, 
  updateClub,
  getClubByAdmin
} = require('../controllers/clubController')


const router = express.Router()

// GET all workouts
router.get('/', getClubs)

// GET a single workout
router.get('/:id', getClub)

router.get('/admin/:id', getClubByAdmin)
// POST a new workout
router.post('/', createClub)

// DELETE a workout
router.delete('/:id', deleteClub)

// UPDATE a workout
router.patch('/:id', updateClub)

module.exports = router