const Address = require('../models/Address');
const AddressNotFound = require('../errors/AddressNotFound');
const CustomerAddressesDTO = require('../dtos/CustomerAddressesDTO');

module.exports = {
    async show(req, res, next) {
        const addresses = await Address.findAll({
            where: {
                customerId: req.params.id
            }
        })

        const dto = addresses.map((address) =>{
            return CustomerAddressesDTO.fromModel(address)
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

        res.send(CustomerAddressesDTO.fromModel(address))
    },
    async index(req, res, next) {
        const address = await Address.findByPk(req.params.addressId)

        res.send(CustomerAddressesDTO.fromModel(address))
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

        res.send(CustomerAddressesDTO.fromModel(address))
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