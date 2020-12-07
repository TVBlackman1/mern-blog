const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const date = (new Date().toLocaleDateString())
    console.log(`${date}: ${req.baseUrl}`)
    next()
})

// /api/main/
router.get('/', (req, res) => {
    res.send("Main page")
})

// /api/main/:profileName
router.get('/:profileName', (req, res) => {
    res.send("Page of " + req.params.profileName)
})

module.exports = router