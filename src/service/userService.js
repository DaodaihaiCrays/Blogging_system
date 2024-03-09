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

const getSingleUserService = async(id) => {
 
  const [results, fields] = await connection.query(
      `select * from User 
      where id = ?`,
      [id.id]
  )
  
  return results[0]
}

const getAllUserService = async() => {
 
  const [results, fields] = await connection.query(
      `select * from User`  
  )
  return results
}

const deleteUserService = async(id) => {
 
  const [results, fields] = await connection.query(
      `delete from User where id = ?`,
      [id.id]  
  )
  return results['affectedRows']
}

const updateUserService = async(user) => {
 
  const [results, fields] = await connection.query(
      `update User
       set name = ?,  email = ?, password = ?
       where id = ?`,
       [user.name, user.email, user.password, user.id]
         
  )
  return results['affectedRows']
}

module.exports = {
  getSingleUserService,
  getAllUserService,
  deleteUserService,
  updateUserService
}