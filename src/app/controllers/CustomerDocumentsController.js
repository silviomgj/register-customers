const Document = require ('../models/Document');
const fs = require('fs');
const path = require('path');
const DocumentNotFound = require('../errors/DocumentNotFound');
const CustomerDocumentsDTO = require('../dtos/CustomerDocumentsDTO');

module.exports = {
    async show(req, res, next) {
        const documents = await Document.findAll({
            where: {
                customerId: req.params.id
            }
        })

        const dto = await documents.map((document) =>{
           return CustomerDocumentsDTO.fromModel(document)
        })

        res.send(dto)
    },
    async store(req, res, next) {
        const document = await Document.create({
            identityDocument: req.body.identityDocument,
            socialSecurity: req.body.socialSecurity,
            customerId: req.params.id,
            photo: `/${req.file.destination}${req.file.filename}`
        })

        res.send(CustomerDocumentsDTO.fromModel(document))
    },
    async index(req, res, next) {
        const document = await Document.findByPk(req.params.documentId)

        res.send(CustomerDocumentsDTO.fromModel(document))
    },
    async delete(req, res, next) {
        const documentId = req.params.documentId
        const document = await Document.findByPk(documentId)
        if (!document) {
            throw new DocumentNotFound(documentId);
        }

        const filePath = document.photo
        fs.unlinkSync(path.join(__dirname, "..", "..", "..", filePath))
        await document.destroy()

        res.status(204).send()
    }
}