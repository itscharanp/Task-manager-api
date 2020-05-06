const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true   
})

// //Instances of the class User
// const uone = new User({
//     name:'Charan',
//     email:'ITS.CHARANP@GMAIL.COM',
//     password:'phone098!',
//     age:27
// })

// uone.save().then(()=>{
//     console.log(uone)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

// const tone = new task({
//     description: 'Learn the Mongoose library',
//     completed:false
// })

// tone.save().then(()=>{
//     console.log(tone)
// }).catch((error)=>{
//      console.log('error')
// })