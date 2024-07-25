const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/upload')
    },
    filename: (req, file, cb) => {
        // file này là file trong trường image của body khi gửi lên
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Unsupported file'), false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*10
    },
    fileFilter: fileFilter
})

module.exports = {
    upload
}