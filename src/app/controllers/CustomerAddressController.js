const Address = require('../models/Address');
const AddressNotFound = require('../errors/AddressNotFound');

module.exports = {
    async show(req, res, next) {
        const addresses = await Address.findAll({
            where: {
                customerId: req.params.id
            }
        })

        const dto = addresses.map((address) =>{
            return {
                id: address.id,
                streetAddress: address.streetAddress,
                streetAddressNumber: address.streetAddressNumber,
                district: address.district,
                city: address.city,
                state: address.state,
                zipCode: address.zipCode
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
            zipCode: req.body.zipCode,
            customerId: req.params.id
        })

        const dto = {
            streetAddress: address.streetAddress,
            streetAddressNumber: address.streetAddressNumber,
            district: address.district,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
        }

        res.send(dto)
    },
    async index(req, res, next) {
        const address = await Address.findByPk(req.params.addressId)

        const dto = {
            streetAddress: address.streetAddress,
            streetAddressNumber: address.streetAddressNumber,
            district: address.district,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
        }

        res.send(dto)
    },
    async update(req, res ,next) {
        const address = await Address.findByPk(req.params.addressId)

        address.set({
            streetAddress: req.body.streetAddress,
            streetAddressNumber: req.body.streetAddressNumber,
            district: req.body.district,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            customerId: req.params.customerId
        })

        const updatedAddress = await address.save()

        const dto = {
            streetAddress: updatedAddress.streetAddress,
            streetAddressNumber: updatedAddress.streetAddressNumber,
            district: updatedAddress.district,
            city: updatedAddress.city,
            state: updatedAddress.state,
            zipCode: updatedAddress.zipCode
        }

        res.send(dto)
    },
    async delete(req, res, next) {
        const addressId = req.params.addressId
        const deleted = await Address.destroy({ where: { id: addressId }});

        if (!deleted) {
            throw new AddressNotFound(addressId);
        }

        res.status(204).send()
    }
}