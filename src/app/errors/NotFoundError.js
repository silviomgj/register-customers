const ApiError = require('./ApiError');
const { StatusCodes } = require('http-status-codes');

class NotFoundError extends ApiError {
    constructor(message = 'Resource not found') {
        super(StatusCodes.NOT_FOUND, message);
    }
};

module.exports = NotFoundError;