const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    login: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
})

const UserModel = mongoose.model('User', userSchema)

const tryRegister = async ({login, password}) => {
    // TODO add jwt and crypt
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

    if (alreadyInDB && alreadyInDB.password === password)
        return { status: 200, message: "Login" }
    return { status: 400, message: "Values is not correct" }
}

const UserAPI = {
    tryRegister,
    tryLogin
}

module.exports = UserAPI

userSchema.methods.tryLogin = async () => {
    // TODO
}

userSchema.methods.tryRegister = async () => {
    // TODO
}