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
        check('login', 'no login').exists(),
        check('password', 'no password').exists()
    ],
    async (req, res) => {
        console.log("Body: ", req.body)
        res.json({"res": "no"})
        //
        //
        // const errors = validationResult(req)
        // if(!errors.isEmpty()) {
        //     return res.status(400).json({
        //         errors: errors.array(),
        //         message: "Некорректные данные при регистрации"
        //     })
        // }
        // const {login, password} = req.body
        // console.log("Get:",login, password)
        // const user = new User({
        //     _id: new mongoose.Types.ObjectId(),
        //     login: "new",
        //     password: "120474ba"
        // })
        // user.save()
        //     .then(result => {
        //         console.log(result)
        //         res.status(201).json("Account was created")
        //
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         res.status(500).json("Server error")
        //     })
})

module.exports = router