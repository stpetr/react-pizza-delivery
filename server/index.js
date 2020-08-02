const express = require('express')
const path = require('path')
require('./db/mongoose')

const PORT = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.listen(PORT, () => {
    console.log('Server is up on port:', PORT)
})
