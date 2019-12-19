require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const pc = require('./controllers/products_controller')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Connected to DB!')
    })
    .catch(err => console.log('Unable to connect', err))

app.get('/api/products', pc.getAll)
app.get('/api/products/:product_id', pc.getOne)
app.post('/api/products', pc.create)
app.put('/api/products/:product_id', pc.update)
app.delete('/api/products/:product_id', pc.delete)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))