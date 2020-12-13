const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const User = require('../models/User')

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/auth/login
router.get('/login', (req, res) => {
    res.send("Login page")
})

// /api/auth/register
router.get('/register', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        login: "tmp_name",
        password: "120474ba"
    })
    user.save()
        .then(result => {
            console.log(result)
            res.status(201).json("Account was created")

        })
        .catch(error => {
            console.log(error)
            res.status(500).json("Server error")
        })
})

module.exports = router