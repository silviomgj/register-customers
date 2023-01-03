const port = 3333

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Customer = require('../models/Customer.js')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/customers', async (req, res, next) => {
    const customers = await Customer.findAll()
    res.send(customers)
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}.`)
})


