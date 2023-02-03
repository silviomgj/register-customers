const NotFoundError = require('./NotFoundError');

class DocumentNotFound extends NotFoundError {
    /**
     * @params {number} id - document identifier 
     */
    constructor(id) {
        super(`Document ${id} not found`)
    }
};

module.exports = DocumentNotFound;