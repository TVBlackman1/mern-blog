const express = require('express');
const router = express.Router();

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/main/
router.get('/', (req, res) => {
    res.send("Main page")
})

// /api/main/:profileName
router.get('/:profileName', (req, res) => {
    res.send("Page of " + req.params.profileName)
})

module.exports = router