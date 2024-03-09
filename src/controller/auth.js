const jwt = require('jsonwebtoken');
const {
    Register,
    Login
} = require('../service/auth')

const RegisterController = async(req,res) => {
    const result = await Register(req.body)

    if(result != null && result>0) {
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success"
            },

        })
    }
    else return res.status(400).json({
        error : {
            code: 400,
            message: "Can not register"
        }
    })
}

const LoginController = async(req,res) => {
    const result = await Login(req.body)

    if(result != null) {
        return res.status(200).json({
            success: {
                code: 200,
                message: "Success",
                data: result
            },

        })
    }
    else return res.status(400).json({
        error : {
            code: 400,
            message: "Email or password was wrong"
        }
    })
}

const checkAuthController = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodeToken = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decodeToken
        console.log(decodeToken)
        console.log("========")
        next()
    } catch (error) {
        return res.status(400).json({
            error : {
                code: 400,
                message: "Invalid or expired token provided!"
            }
        })
    }
}

module.exports = {
    RegisterController,
    LoginController,
    checkAuthController
}