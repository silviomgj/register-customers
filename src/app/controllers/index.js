const port = 3333

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/customers', (req, res, next) => {
    res.send(`{"customer": {"nome": "Teste"}}`)
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}.`)
})