const {
    createCommentService,
    getSingleCommentService,
    getAllCommentService,
    deleteCommentService,
    updateCommentService
} = require("../service/commentService")

const createCommentController = async(req, res) => {
    
    const result = await createCommentService(req.body)

    if(result>0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not create comment"
            }
        })
}

const getSingleCommentController = async(req, res) => {
    
    const result = await getSingleCommentService(req.body)
   
    if(result != null) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success",
                data: result
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not get a comment",
                data: result
            }
        })
}

const getAllCommentController = async(req, res) => {
    
    const result = await getAllCommentService(req.body)
   
    if(result != null) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success",
                data: result
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not get list of comment"
            }
        })
}

const deleteCommentController = async(req, res) => {
    
    const result = await deleteCommentService(req.body)
   
    if(result > 0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success",
                data: result
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not delete comment"
            }
        })
}

const updateCommentController = async(req, res) => {

    const result = await updateCommentService(req.body)

    if(result>0) 
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    else 
        return res.status(400).json({
            error : {
                code: 400,
                message: "Can not update comment"
            }
        })
}

module.exports = {
    createCommentController,
    getSingleCommentController,
    getAllCommentController,
    deleteCommentController,
    updateCommentController
}