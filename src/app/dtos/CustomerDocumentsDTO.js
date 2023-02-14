class CustomerDocumentsDTO {

    static fromModel(document) {
        return {
            id: document.id,
            socialSecurity: document.socialSecurity,
            identityDocument: document.identityDocument,
            photo: document.photo
        }
    }

}

module.exports = CustomerDocumentsDTO;