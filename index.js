const {app} = require('./app.js')
const staff_member_routes=require('./routes/staff_members_routes')
const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL, {useNewUrlParsSer: true , useUnifiedTopology:true})

app.listen(process.env.PORT)