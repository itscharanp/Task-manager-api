const express = require('express')
require('./db/mongoose.js')
const User = require('./models/users')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000


const multer = require('multer')
const upload = multer({
    dest: 'images', 
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){    
        if(!file.originalname.match(/\.(doc|docx)$/))
        {
                return cb(new Error('Please upload a word document ') )
        }    
        cb(undefined,true)
    }
})

const errorMW = (req,res,next)=>{   
    throw new Error('From my middle ware')
}


app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error: error.message})
})





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})

const main = async() =>{
//    const task = await Task.findById('5eb2ad6a4ce205271ce4cd75')
//    await task.populate('owner').execPopulate()
//    console.log(task.owner)

    const user = await User.findById('5eb2aae46a129b1164671d6d')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)

}

main()


