const express = require('express');
const {check, validationResult} = require("express-validator")
const router = express.Router();

const mongoose = require('mongoose')
const User = require('../models/User')

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/auth/login
router.post('/login', (req, res) => {
    res.send("Login page")
})

// /api/auth/register
router.post('/register', [
        check('login', 'no login').exists().isLength({min: 4}),
        check('password', 'no password').exists().isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Not correct values"
            })
        }
        const {login, password} = req.body
        console.log("Get:",login, password)

        // const alreadyInDB = await User.findOne({login})
        // console.log("alreadyInDB", alreadyInDB)
        //
        // if(!alreadyInDB) {
        //     const user = new User({ _id: new mongoose.Types.ObjectId(), login, password })
        //     user.save()
        //         .then(result => {
        //             console.log(result)
        //             res.status(201).json("Account was created")
        //
        //         })
        //         .catch(error => {
        //             console.log(error)
        //             res.status(500).json("Server error")
        //         })
        // } else {
        //     console.log("Dont add")
        // }
        const regRes = await User.tryRegister({login, password})
        console.log(regRes)
})

module.exports = router