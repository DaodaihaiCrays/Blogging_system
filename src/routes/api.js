const express = require('express')
const routerAPI = express.Router()

const {
    createPostController,
    getSinglePostController,
    getAllPostController,
    deletePostController,
    updatePostController
} = require('../controller/postController')

const {
    getSingleUserController,
    getAllUserController,
    deleteUserController,
    updateUserController
} = require('../controller/userController')

const {
    createCommentController,
    getSingleCommentController,
    getAllCommentController,
    deleteCommentController,
    updateCommentController
} = require('../controller/commentController')

const {
    RegisterController,
    LoginController,
    checkAuthController
} = require('../controller/auth')

const {
    uploadController
} = require('../controller/imageController')
const {
    upload
} = require('../helper/image-uploader')

routerAPI.post('/post', checkAuthController, createPostController)
routerAPI.get('/getSinglePost', getSinglePostController),
routerAPI.get('/getAllPost', getAllPostController),
routerAPI.delete('/post', checkAuthController, deletePostController)
routerAPI.put('/post', checkAuthController, updatePostController)

routerAPI.get('/getSingleUser', getSingleUserController),
routerAPI.get('/getAllUser', getAllUserController),
routerAPI.delete('/user', checkAuthController, deleteUserController)
routerAPI.put('/user', checkAuthController, updateUserController)

routerAPI.get('/getSingleComment', getSingleCommentController),
routerAPI.get('/getAllComment', getAllCommentController),
routerAPI.delete('/comment', checkAuthController, deleteCommentController)
routerAPI.put('/comment', checkAuthController, updateCommentController)

routerAPI.post('/auth-register',RegisterController)
routerAPI.post('/auth-login', LoginController)

//'image' là tên trường có kiểu file
routerAPI.post('/upload', checkAuthController, upload.array('image',3), uploadController)


module.exports = routerAPI