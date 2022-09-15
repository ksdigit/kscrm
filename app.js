const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res, next) => {
    res.end('Welcome to KadiorSOLUTIONS')
})

app.listen(`Server listenning on port ${PORT}`)