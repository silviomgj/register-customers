const multer = require('multer');
const { v4: uuidv4} = require('uuid');
const path = require('path');

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
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
}