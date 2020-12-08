const express = require('express');
const router = express.Router();

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/auth/login
router.get('/login', (req, res) => {
    res.send("Login page")
})

// /api/auth/register
router.get('/register', (req, res) => {
    res.send("Register page")
})

module.exports = router