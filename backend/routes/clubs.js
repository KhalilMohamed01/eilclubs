const express = require('express')
const {
  getClubs, 
  getClub, 
  createClub, 
  deleteClub, 
  updateClub,
  getClubByAdmin,
  loginUser,
   signupUser,
} = require('../controllers/clubController')


const router = express.Router()

router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)


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