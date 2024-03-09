const { v4: uuidv4 } = require('uuid');
const connectionPromise = require('../config/database')
var connection
;(async () => {
    try{
      
       connection = await connectionPromise

    } catch(error) {
      console.log(error)
    }
    
})()

const createUploadImageService = async(images, postId, userId) => {
    
    let check = true
    
    for(let i = 0 ;i<images.length; i++) {
        try {
            const id = uuidv4();
            const [results, fields] = await connection.query(
                `insert into Upload(id, imgae_url, postId, userId)
                 values (?, ?, ?, ?)`,
                [id, images[i]['filename'], postId, userId]
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return true
}

module.exports = {
    createUploadImageService
}