class AppError extends Error {
    constructor(message = 'Internal application error, contact your administrator') {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = AppError;