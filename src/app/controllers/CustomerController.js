const Customer = require('../models/Customer.js')

const SEQUELIZE_DELETED_SUCCESSFUL = 1;

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
        const customer = await Customer.findByPk(req.params.id)
              
        res.send(customer)
    },
    async store(req, res, next) {
         const customer = await Customer.create({
             nome: req.body.nome,
             sobrenome: req.body.sobrenome,
             conjuge: req.body.conjuge,
             data_nasc: req.body.data_nasc
         })

         res.send(customer)
    },
    async delete(req, res, next) {
        const customerId = req.params.id
        const isDeleted = await Customer.destroy({ where: { id: customerId }});

       if (isDeleted == SEQUELIZE_DELETED_SUCCESSFUL) {
            res.status(204).send()
        }

        res.status(404).send({
            type: 'NOT_FOUND',
            title: 'Resource not found',
            detail: `Customer ${customerId} not found`
        })
    },
    async update(req, res, next) {
        const customer = await Customer.findByPk(req.body.id)

        customer.set({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nasc: req.body.data_nasc,
            conjuge: req.body.conjuge
          });
        const updatedCustomer = await customer.save();

        res.send(updatedCustomer)
    }
}