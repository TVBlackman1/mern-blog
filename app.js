const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

const PORT = config.get('PORT') || 5000

const routerMain = require('./routers/router.main')
app.use('/api/main', routerMain)

const routerAuth = require('./routers/router.auth')
app.use('/api/auth', routerAuth)



app.get('/', (req, res) => {
    res.send("Main page")
})


async function start() {
    try {
        await mongoose.connect(config.get('mongodbURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`Express app started on port ${PORT}`)
            console.log(`http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()