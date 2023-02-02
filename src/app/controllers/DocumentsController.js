const Documents = require ('../models/Documents')

module.exports = {
    async show(req, res, next) {
        const documents = await Documents.findAll()

        const dto = await documents.map((document) =>{
            return {
                id: document.id,
                socialSecurity: document.socialSecurity
            }
        })

        res.send(dto)
    },
    async store(req, res, next) {
        const document = await Documents.create({
            identityDocument: req.body.identityDocument,
            socialSecurity: req.body.socialSecurity,
            photo: `${req.file.destination}${req.file.filename}`
        })

        res.send(document)
    },
    async index(req, res, next) { 
        const document = await Documents.findByPk(req.params.id)

        res.send(document)
    }
}