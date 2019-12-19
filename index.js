require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Connected to DB!')
    })
    .catch(err => console.log('Unable to connect', err))

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))