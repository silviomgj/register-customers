const multer = require('multer');
const { v4: uuidv4} = require('uuid');
const path = require('path');

const ONE_MB = 1024 * 1024;

module.exports = {
    dest: 'temp/uploads/',
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'temp/uploads/')
        },
        filename: function (req, file, cb) {
            const prefix = uuidv4()
            cb(null, `${prefix}_${file.originalname}`)
        }
    }),
    fileFilter: function (req, file, callback) {
        const allowedMimeTypes = ['image/jpg', 'image/png', 'image/jpeg']
        if (!allowedMimeTypes.includes(file.mimetype))
            return callback(new Error('Only images are allowed'))

        callback(null, true)
    },
    limits: {
        fileSize: ONE_MB
    }
}