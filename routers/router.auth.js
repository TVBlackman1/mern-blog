const express = require('express');
const {check, validationResult} = require("express-validator")
const router = express.Router();

const mongoose = require('mongoose')
const User = require('../models/User')

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/auth/login
router.post('/login', [
        check('login', 'no login').exists(),
        check('password', 'no password').exists()
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

        const logRes = await User.tryLogin({login, password})
        console.log(logRes)
        res.json(logRes)
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

        const regRes = await User.tryRegister({login, password})
        console.log(regRes)
        res.json(regRes)

    })

module.exports = router