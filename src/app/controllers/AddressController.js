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
    }
}   