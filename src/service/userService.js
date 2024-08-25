const bcrypt = require('bcrypt');
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

const getSingleUserService = async(id) => {
  if(id.id.length == 0 )
   return null
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
  if(id.id.length == 0 )
    return null
  const [results, fields] = await connection.query(
      `delete from User where id = ?`,
      [id.id]  
  )
  return results['affectedRows']
}

const updateUserService = async(user) => {
  if(user.name.length == 0 ||  user.email.length == 0 ||  user.password, user.id)
    return 0
  const saltRounds = 10;
  const password = await bcrypt.hash(user.password, saltRounds);
  const [results, fields] = await connection.query(
      `update User
       set name = ?,  email = ?, password = ?
       where id = ?`,
       [user.name, user.email, password, user.id]
         
  )
  return results['affectedRows']
}

module.exports = {
  getSingleUserService,
  getAllUserService,
  deleteUserService,
  updateUserService
}