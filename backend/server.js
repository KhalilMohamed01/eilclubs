require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const eventRoutes = require('./routes/events')
const clubRoutes = require('./routes/clubs')
const app = express()

const cors = require('cors');
//allow all
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



app.use('/api/events',eventRoutes)
app.use('/api/clubs',clubRoutes)



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(process.env.PORT, () => {
    console.log('Connected to DB / listening on port ',process.env.PORT)
    })
     })
    .catch(() => {
        console.log(console.error())
    })


module.exports = app;
