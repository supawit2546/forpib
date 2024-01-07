const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://plugjimin:plugjimin1234@api.m5kfogj.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB