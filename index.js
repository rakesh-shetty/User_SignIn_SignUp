const express = require('express')
const setupDB = require('./config/database')
const routes = require('./config/routes')
const app = express()
const autheticateUser = require('./app/middlewares/authentication')
const PORT = 3033
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(autheticateUser)

app.use('/', routes)


setupDB()

app.get('/', (req, res) => {
    res.json({ title: 'Welcome to the website' })
})

app.listen(PORT, () => {
    console.log('listining at port ' + PORT)
})