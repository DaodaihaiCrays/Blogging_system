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

const createCommentService = async(comment) => {
  const id = uuidv4();
  if(comment.content.length == 0 || comment.postId.length == 0 || comment.userId.length == 0)
    return 0
  const [results, fields] = await connection.query(
      `insert into Comment(id, content, postId, userId)
       values (?, ?, ?, ?)`,
      [id, comment.content, comment.postId, comment.userId]
  )
  
  return results['affectedRows']
}

const getSingleCommentService = async(id) => {
  if(id.id.length == 0 )
    return null
  const [results, fields] = await connection.query(
      `select * from Comment  
      where id = ?`,
      [id.id]
  )
  
  return results[0]
}

const getAllCommentService = async() => {
 
  const [results, fields] = await connection.query(
      `select * from Comment`  
  )
  return results
}

const deleteCommentService = async(id) => {
  if(id.id.length == 0 )
    return 0
  const [results, fields] = await connection.query(
      `delete from Comment where id = ?`,
      [id.id]  
  )
  return results['affectedRows']
}

const updateCommentService = async(comment) => {
  if(comment.content.length == 0 || comment.postId.length == 0 || comment.userId.length == 0 || comment.id.length == 0)
    return 0
  const [results, fields] = await connection.query(
      `update Post
       set  content = ?, postId = ?, userId = ?
       where id = ?`,
       [comment.content, comment.postId, comment.userId, comment.id]
         
  )
  return results['affectedRows']
}

module.exports = {
  createCommentService,
  getSingleCommentService,
  getAllCommentService,
  deleteCommentService,
  updateCommentService
}