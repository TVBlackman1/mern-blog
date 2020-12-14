const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    login: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
})

const UserModel = mongoose.model('User', userSchema)

// module.exports = mongoose.model('User', userSchema)

const tryRegister = async ({login, password}) => {
    const alreadyInDB = await UserModel.findOne({login})

    if(!alreadyInDB) {
        const user = new UserModel({_id: new mongoose.Types.ObjectId(), login, password})
        await user.save()
        return { status: 201, message: "Account was created" }
    } else {
        return { status: 400, message: "Account already exist" }
    }
}

const tryLogin = async ({login, password}) => {
    const alreadyInDB = await UserModel.findOne({login})

    if(!alreadyInDB) {
        const user = new UserModel({_id: new mongoose.Types.ObjectId(), login, password})
        await user.save()
        return { status: 201, message: "Account was created" }
    } else {
        return { status: 400, message: "Account already exist" }
    }
}

const UserAPI = {
    tryRegister,
    tryLogin
}

module.exports = UserAPI