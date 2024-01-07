const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nick:String,
    email: String,
    name:String,
    password: {
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)