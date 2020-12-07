const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const date = (new Date().toLocaleDateString())
    console.log(`${date}: ${req.baseUrl}`)
    next()
})

router.get('/login', (req, res) => {
    res.send("Login page")
})

router.get('/register', (req, res) => {
    res.send("Register page")
})

module.exports = router