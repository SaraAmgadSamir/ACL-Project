const express = require('express')
//const users_routes=require('./routes/user_routes')
const app = express()
const jwt=require("jsonwebtoken")
require("dotenv").config()
//access body of request
//so that body of the request isn't undefined
app.use(express.json())
const staff_members_routes = require('./routes/staff_members_routes')
app.use('',staff_members_routes )
//lama ted5ol gowa roh 3ala /register
//app.use('',users_routes)
module.exports.app = app