const mongoose = require('mongoose')
const { schema } = require('./staff_members')

const attendanceSchema = new mongoose.Schema(
    {
     
        ID: {

            type:mongoose.Schema.Types.ObjectId,
            unique:true,
            required:true,
            ref:"attendance"
            
        },
       
        day: {
            type: String,
            required:true
        } ,
        signInTime: {
            type: Date,
            required:true
        } ,
        signOutTime: {
            type: Date,
            required:true
        } 
    })
    
    //req mongoose, then schema, then export
    
    module.exports = mongoose.model('attendance',attendanceSchema)
    //table is lowercase and plural of 'user' insterted above
    