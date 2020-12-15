const {app} = require('./app.js')
const staff_member_routes=require('./routes/staff_member_routes')
const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.DB_URL)

staff_member_routes.route('')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true , useUnifiedTopology:true})

app.listen(process.env.PORT)