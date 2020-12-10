const express = require('express');
const router = express.Router();

const requestDatetime = require('../middleware/request-datetime')
router.use(requestDatetime)

// /api/main/
router.post('/', (req, res) => {
    const actualNews = {
        recent: {
            "Action 1":"Description 1",
            "Action 2":"Description 2",
            "Action 3":"Description 3",
            "Action 4":"Description 4",
            "Action 5":"Description 5",
        }
    }
    res.json(actualNews)
})

// /api/main/:profileName
router.post('/:profileName', (req, res) => {
    res.send("Page of " + req.params.profileName)
})

module.exports = router