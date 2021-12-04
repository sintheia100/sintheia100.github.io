const mongoose = require('mongoose')
//task-2 - Creating a model
const UserSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
    }

})

module.exports = mongoose.model('Users', UserSchema)