// const mongodb =  require('mongodb')
// const MongoClient =  mongodb.MongoClient
// const MongoClient = mongodb.ObjectID

// destructuring const variables

const{MongoClient ,ObjectID} = require('mongodb')
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)=>{
       
    if(error)
    {
        console.log('Unable to connect database')
    }
    const db = client.db(databaseName)

    //Deleting
    // db.collection('users').deleteMany({
    //         age:27
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //Updating 

    // db.collection('users').updateOne(
    //     {_id: new ObjectID("5eaf120fffe6d90a28cd6695")},
    //     {
    //         //Refer for the update operators
    //         $inc:{
    //             age: 1
    //         }
    //     }).then((result)=>{
    //         console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })    

    // (OR)
    // const updatepromise = db.collection('users').updateOne(
    //     {_id: new ObjectID("5eaf120fffe6d90a28cd6695")},
    //     {
    //         $set:{
    //             name: 'Kumar'
    //         }
    //     })

    // updatepromise.then((result)=>{
    //         console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })    
    
    //Querying 
    
    //  db.collection('users').findOne({_id: new ObjectID("5eaf120fffe6d90a28cd6694") },(error,user) =>{
    //      if(error)
    //      {
    //          return console.log('Unable to fetch')
    //      }
    //      console.log(user)
    //  })
    // db.collection('users').find({age : 27}).toArray((error,users) =>{
    //     console.log(users)
    // })     
    // db.collection('users').find({age : 27}).count((error,count) =>{
    //     console.log(count)
    // })     


     //INSERTION
    //  db.collection('users').insertOne({
    //      _id:id,
    //      name:'Pinni',
    //      age:27
    //  }, (error,result) => {
    //       if(error)
    //       {
    //           return console.log('Unable to insert user ')
    //       }
    //       console.log(result.ops)
    //  })  
})