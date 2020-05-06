const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User'
    }

},{
    timestamps:true
})


taskSchema.pre('save',async function(next){
    const task = this

//     async function(next){
//         const user = this
//         if(user.isModified('password'))
//         {
//              user.password = await bcrypt.hash(user.password,8) 
//         }
   
   
//         next()
//    })
    next()
})

const task =  mongoose.model('Task',taskSchema)
module.exports = task