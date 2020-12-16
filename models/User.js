const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const config = require("config")

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
        const hashPassword = await bcrypt.hash(password, 12)
        const user = new UserModel({_id: new mongoose.Types.ObjectId(), login, password: hashPassword})
        await user.save()
        return { status: 201, message: "Account was created" }
    } else {
        return { status: 400, message: "Account already exist" }
    }
}

const tryLogin = async ({login, password}) => {
    const alreadyInDB = await UserModel.findOne({login})

    if (alreadyInDB && await bcrypt.compare(password, alreadyInDB.password)) {
        const token = jwt.sign({
            login: login,
            permission: "premium"
        }, config.get("jwtKey"), { expiresIn: '1h' });

        return { status: 200, message: "Login", token}
    }
    return { status: 400, message: "Values is not correct" }
}

const UserAPI = {
    tryRegister,
    tryLogin
}

module.exports = UserAPI

// userSchema.methods.tryLogin = async () => {
//     // TODO
// }
//
// userSchema.methods.tryRegister = async () => {
//     // TODO
// }