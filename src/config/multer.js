const multer = require('multer');
const { v4: uuidv4} = require('uuid');

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
    })
}