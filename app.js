const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('PORT')

app.get('/', (req, res) => {
    console.log("New connection..")
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Express app started on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})