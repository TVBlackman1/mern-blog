const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    login: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
})

module.exports = mongoose.model('User', userSchema)