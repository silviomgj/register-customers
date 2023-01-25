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
    }
}