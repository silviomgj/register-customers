class CustomerAddressesDTO {

    static fromModel(address) {
        return {
            id: address.id,
            streetAddress: address.streetAddress,
            streetAddressNumber: address.streetAddressNumber,
            district: address.district,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode
        }
    }
}

module.exports = CustomerAddressesDTO;