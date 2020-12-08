const requestDatetime = (req, res, next) => {
    const date = (new Date().toLocaleDateString())
    console.log(`${date}: ${req.baseUrl}`)
    next()
}

module.exports = requestDatetime