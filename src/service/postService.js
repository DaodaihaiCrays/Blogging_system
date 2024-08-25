const { v4: uuidv4 } = require('uuid');
// const connectionPromise = require('../config/database')
const connection = require('../config/database')
// var connection
// ;(async () => {
//     try{
      
//        connection = await connectionPromise

//     } catch(error) {
//       console.log(error)
//     }
    
// })()

const createPostService = async(post) => {
  const id = uuidv4();
  if(post.title.length == 0 || post.categoryId.length == 0 || post.userId.length == 0 || post.content.length == 0)
    return 0
  const [results, fields] = await connection.query(
      `insert into Post(id, title, content, categoryId, userId)
       values (?, ?, ?, ?, ?)`,
      [id, post.title, post.content, post.categoryId, post.userId]
  )
  
  return results['affectedRows']
}

const getSinglePostService = async(id) => {
  if(id.id.length == 0 )
    return null
  const [results, fields] = await connection.query(
      `select * from Post  
      where id = ?`,
      [id.id]
  )
  
  return results[0]
}

const getAllPostService = async() => {
 
  const [results, fields] = await connection.query(
      `select * from Post`  
  )
  return results
}

const deletePostService = async(id) => {
  if(id.id.length == 0 )
    return 0
  const [results, fields] = await connection.query(
      `delete from Post where id = ?`,
      [id.id]  
  )
  return results['affectedRows']
}

const updatePostService = async(post) => {
  if(post.title.length == 0 || post.categoryId.length == 0 || post.userId.length == 0 || post.content.length == 0)
    return 0
  const [results, fields] = await connection.query(
      `update Post
       set  title = ? , content = ? , categoryId = ?, userId = ?
       where id = ?`,
       [post.title, post.content, post.categoryId, post.userId, post.id]
         
  )
  return results['affectedRows']
}

module.exports = {
  createPostService,
  getSinglePostService,
  getAllPostService,
  deletePostService,
  updatePostService
}