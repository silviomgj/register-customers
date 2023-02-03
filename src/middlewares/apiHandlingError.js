const ApiError = require('../app/errors/ApiError');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

const THREE_HOURS_IN_MILLIS = 60 * 60 * 3 * 1000;

const getBrazilianTime = () => {
   return new Date(new Date() - THREE_HOURS_IN_MILLIS);
}

module.exports = (e, req, res, next) => {
    if (e instanceof ApiError) {
        res.status(e.status).send({
            timestamp: getBrazilianTime(),
            status: e.status,
            title: getReasonPhrase(e.status),
            detail: e.message,
            instance: req.originalUrl
        })
    } else {
        console.log(e.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            timestamp: getBrazilianTime(),
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            title: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
            detail: 'Internal application error, contact your adminstrator',
            instance: req.originalUrl
        })
    }
}