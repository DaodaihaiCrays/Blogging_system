const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { 
    validateEmail
} = require('../service/valid')
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

const validatePassword = async function(inputPassword, password) {
    
    return await bcrypt.compare(inputPassword, password);
};

const Register = async(data) => {
    const saltRounds = 10;
    if(validateEmail(data.email)) {
        const [select, _] = await connection.query(
            `select * from User  
            where email = ?`,
            [data.email]
        )

        if(select.length>0)
            return null

        const password = await bcrypt.hash(data.password, saltRounds);
        const id = uuidv4();
        const [results, fields] = await connection.query(
            `insert into User(id, name, email, password)
             values (?, ?, ?, ?)`,
            [id, data.name, data.email, password]
        )
        
        return results['affectedRows']
    }
    return null
}

const Login = async(data) => {
    const [results, fields] = await connection.query(
        `select * from User  
        where email = ?`,
        [data.email]
    )

    if(results.length !=0 && validatePassword(data.password, results[0]['password']))
    {   
        const token = jwt.sign({
            email: data.email,
            id: results[0]['id']
        }, process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRE})
        return token
    }
    return null
}


module.exports = {
    Register,
    Login
}