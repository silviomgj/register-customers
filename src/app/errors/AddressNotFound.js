const NotFoundError = require('./NotFoundError');

class AddressNotFound extends NotFoundError {
    /**
     * @params {number} id - Address identifier 
     */
    constructor(id) {
        super(`Address ${id} not found`)
    }
};

module.exports = AddressNotFound;