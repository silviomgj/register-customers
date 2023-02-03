const AppError = require('./AppError');

class ApiError extends AppError {
    constructor(status = 500, message = 'API Error') {
        super(message);
        this.status = status;
    }
};

module.exports = ApiError;