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
    }
}