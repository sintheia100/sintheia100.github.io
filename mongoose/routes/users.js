const express = require('express')
const router = express.Router()
const Users = require('../models/Users')




// task 3 - create and save record

const user = new Users({
    name: 'Suzana',
    email:'112c@mail.com'
})
user.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log('create and save record\n\n',result)
    }
})

//task 4 - create many records with model.create()
Users.create([
    {
        name:'user-1',
        email:'email-1'
    },
    {
        name:'user-2',
        email:'email-2'
    },
    {
        name:'user-3',
        email:'email-3'
    },
]).then((res)=> console.log(`create many records with model.create()\n`,res))

// Task 5 - Use model.find() to search from database
Users.find({name:'Suzana'}).then(res=> console.log('Use model.find() to search from database\n\n',res))



// Task 6 - Use model.findOne() to search single matching document

Users.findOne({email: 'email-1'}).then(res=> console.log('Use model.findOne({email: "email-1"}) to search single matching document\n', res))


// Task 7 - Use model.findById to search the document

Users.findById('61aba0a3423d21e99d1597b8').then(result => console.log('Use model.findById("61aba0a3423d21e99d1597b8") to search the document\n', result))


// Task 8 - find, edit and save - unable to do it

const classicEdit = Users.findOne({name:'user-1'}, function(err,doc){
    if(err){
        console.error(err)
    }
})
classicEdit.email = "Modified Email"
//classicEdit.save()


// Task 9 - New update on document using findOneAndUpdate({name: 'Suzana})

Users.findOneAndUpdate({name:'Suzana'}, {
    name:'Halen'
}, {new:true}, (err,doc)=> {
    if(err){
        console.log(err)
    }
    else{
        console.log("New update on document using findOneAndUpdate({name: 'Suzana})",doc)
    }
})


//Task 10 - Use findByIdAndRemove() and delete a document

Users.findByIdAndRemove('61aba0a3423d21e99d1597b6').then(res=> console.log('Use findByIdAndRemove() and delete a document\n',res))


// Task 11 - Delete many documents using model.remove()

Users.remove({
    name:'Suzana'
}).then(res=> console.log(res))



// Task 12 - Chain Search Query Helpers to Narrow Search Results

const search = 'user-1'
Users.find({name: search}).limit(3).sort({email:"asc"}).exec((err,docs)=> {
    if(err){
        console.error(err)

    }
    else{
        console.log('Chain Search Query Helpers to Narrow Search Results\n\n',docs)
    }
})


module.exports = router