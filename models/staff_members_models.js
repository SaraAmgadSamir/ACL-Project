const mongoose = require('mongoose')
const staffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 5
        },
        ID: {
            type: String,
            unique:true,
            required:true
            
        },
        email: {
            type: String,
            unique:true,
            required:true
        } ,
        password: {
            type: String,
            required:true
        } ,
        salary: {
            type: Number,
           // required:true
        } ,
        role: {
            type: String,
            required:true,
            //operators start with $, to specify constraints
            $in: [ "HR members","academic members"]
        },
        attendance:{type:mongoose.Schema.Types.ObjectId,
                    ref:'attendance'}
    })

    
    module.exports = mongoose.model('staff',staffSchema)
   
    //table is lowercase and plural of 'user' insterted above
    