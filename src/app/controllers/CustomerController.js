const Customer = require('../models/Customer.js')

module.exports = {
    async show(req, res, next) {
        const customers = await Customer.findAll()
    
        const dto = customers.map((customer) => {
            return {
                id: customer.id,
                nomeCompleto: `${customer.nome} ${customer.sobrenome}`
            }
        })
    
        res.send(dto)
    },
    async index(req, res, next) {
        const customers = await Customer.findAll()
        const byId = customer => customer.id == req.params.id
       
        res.send(customers.find(byId))
    }
}