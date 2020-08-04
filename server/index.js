const cors = require('cors')
const express = require('express')
const path = require('path')
require('./db/mongoose')

const adminRouter = require('./routers/admin')

const PORT = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

app.use(cors())
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(adminRouter)

app.get('*', (req, res, next) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log('Server is up on port:', PORT)
})
