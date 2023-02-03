const NotFoundError = require('./NotFoundError');

class CustomerNotFound extends NotFoundError {
    /**
     * @params {number} id - Customer identifier 
     */
    constructor(id) {
        super(`Customer ${id} not found`)
    }
};

module.exports = CustomerNotFound;