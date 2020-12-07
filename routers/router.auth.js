const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const date = (new Date().toLocaleDateString())
    console.log(`${date}: ${req.baseUrl}`)
    next()
})

// /api/auth/login
router.get('/login', (req, res) => {
    res.send("Login page")
})

// /api/auth/register
router.get('/register', (req, res) => {
    res.send("Register page")
})

module.exports = router