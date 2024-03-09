const {
    getSingleUserService,
    getAllUserService,
    deleteUserService,
    updateUserService
} = require("../service/userService")


const getSingleUserController = async(req, res) => {
    
    const result = await getSingleUserService(req.body)
   
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
                message: "Can not get a user",
                data: result
            }
        })
}

const getAllUserController = async(req, res) => {
    
    const result = await getAllUserService(req.body)
   
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
                message: "Can not get list of user"
            }
        })
}

const deleteUserController = async(req, res) => {
    
    const result = await deleteUserService(req.body)
   
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
                message: "Can not delete user"
            }
        })
}

const updateUserController = async(req, res) => {

    const result = await updateUserService(req.body)

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
    getSingleUserController,
    getAllUserController,
    deleteUserController,
    updateUserController
}