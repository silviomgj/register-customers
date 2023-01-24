const Address = require('../models/Address')

module.exports = {
    async show(req, res, next) {
        const addresses = await Address.findAll()

        const dto = addresses.map((address) =>{
            return {
                id: address.id,
                cityAndState: `${address.city}, ${address.state}`
            }
        })

        res.send(dto)
    },
    async store(req, res, next) {
        const address = await Address.create({
            streetAddress: req.body.streetAddress,
            streetAddressNumber: req.body.streetAddressNumber,
            district: req.body.district,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode
        })

        res.send(address)
    },
    async index(req, res, next) {
        const address = await Address.findByPk(req.params.id)

        res.send(address)
    },
    async update(req, res ,next) {
        const address = await Address.findByPk(req.body.id)

        address.set({
            streetAddress: req.body.streetAddress,
            streetAddressNumber: req.body.streetAddressNumber,
            district: req.body.district,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode
        })
        const updatedAddress = await address.save()

        res.send(updatedAddress)
    }
}