const  {
    createUploadImageService
} = require('../service/uploadImageService')

const uploadController = async(req, res) => {
    
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({
            error: {
                code: 400,
                message: "Can not upload"
            }
        });
    }
    const userId = req.userData.id;

    const result = await createUploadImageService(req.files, req.body.postId, userId)

    if(result!=null)
        return res.status(200).json({
            error: {
                code: 200,
                message: "Success"
            }
        });
    else 
        return res.status(400).json({
            error: {
                code: 400,
                message: "Can not upload"
            }
        });
}

module.exports = {
    uploadController
}
