const jwt = require('jsonwebtoken')
const Club = require('../models/clubModel')

const requireAuth = async (req,res,next) => {

    //verify auth
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token,process.env.SECRET)

        req.club = await Club.findOne({_id}).select('_id')
        next()
    }catch(error){
        console.log(error)
        response.status(401).json({error: 'Requested is not authorized'})
    }

}
module.exports = requireAuth