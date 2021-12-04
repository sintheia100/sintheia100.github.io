const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/users')
const port = process.env.PORT || 5500

const uri=process.env.URI || 'mongodb+srv://admin:admin@cluster0.oyujz.mongodb.net/assignment?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})

const db = mongoose.connection.once('open', ()=>{
    console.log('connection successful');
    
})
db.on('error', (err)=> console.error({error:err})
);

app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoute)

app.listen(port, ()=> {
console.log(`The application is running at port ${port}`);

})


