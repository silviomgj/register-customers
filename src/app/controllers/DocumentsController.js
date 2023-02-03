const Documents = require ('../models/Documents');
const fs = require('fs');
const path = require('path');

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
            photo: `/${req.file.destination}${req.file.filename}`
        })

        res.send(document)
    },
    async index(req, res, next) { 
        const document = await Documents.findByPk(req.params.id)

        res.send(document)
    },
    async delete(req, res, next) {
        const document = await Documents.findByPk(req.params.id)
        if (!document) {
            res.status(404).send({
                type: 'NOT_FOUND',
                title: 'Resource not found',
                detail: `Document ${req.params.id} not found`
            })
        }

        const filePath = document.photo
        fs.unlinkSync(path.join(__dirname, "..", "..", "..", filePath))
        await document.destroy()

        res.status(204).send()
    }
}