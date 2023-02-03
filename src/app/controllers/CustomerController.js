const Customer = require('../models/Customer.js');
const CustomerNotFound = require('../errors/CustomerNotFound')

module.exports = {
    async show(req, res, next) {
        const customers = await Customer.findAll()
    
        const dto = customers.map((customer) => {
            return {
                id: customer.id,
                fullName: `${customer.firstName} ${customer.familyName}`
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
            firstName: req.body.firstName,
            familyName: req.body.familyName,
            spouse: req.body.spouse,
            birthDate: req.body.birthDate
        })

        res.send(customer)
    },
    async delete(req, res, next) {
        const customerId = req.params.id
        const isDeleted = await Customer.destroy({ where: { id: customerId }});

        if (!isDeleted) {
            throw new CustomerNotFound(customerId);
        }

        res.status(204).send()
    },
    async update(req, res, next) {
        const customer = await Customer.findByPk(req.body.id)

        customer.set({
            firstName: req.body.firstName,
            familyName: req.body.familyName,
            spouse: req.body.spouse,
            birthDate: req.body.birthDate
        });
        const updatedCustomer = await customer.save();

        res.send(updatedCustomer)
    }
}