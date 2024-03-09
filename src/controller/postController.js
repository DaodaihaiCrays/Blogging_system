const {
    createPostService,
    getSinglePostService,
    getAllPostService,
    deletePostService,
    updatePostService
} = require("../service/postService")

const createPostController = async(req, res) => {
    
    const result = await createPostService(req.body)

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
                message: "Can not create post"
            }
        })
}

const getSinglePostController = async(req, res) => {
    
    const result = await getSinglePostService(req.body)
   
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
                message: "Can not get a post"
            }
        })
}

const getAllPostController = async(req, res) => {
    
    const result = await getAllPostService(req.body)
   
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
                message: "Can not get list of post"
            }
        })
}

const deletePostController = async(req, res) => {
    
    const result = await deletePostService(req.body)
   
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
                message: "Can not delete post"
            }
        })
}

const updatePostController = async(req, res) => {

    const result = await updatePostService(req.body)

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
                message: "Can not update user"
            }
        })
}

module.exports = {
    createPostController,
    getSinglePostController,
    getAllPostController,
    deletePostController,
    updatePostController
}