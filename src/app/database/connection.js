import mysql from 'mysql'

const connection = mysql.createConnection({
       host: 'localhost',
       port: '3306',
       user: 'root',
       password: '',
       database: 'db-api-rest'
    }); 

connection.connect()

export const inquiry = (sql , value = '', message) =>{

       return new Promise((resolve, reject) =>{
              connection.query(sql, value , (error , result) =>{
  
                  if( error ) return reject(message)
                     const row = JSON.parse(JSON.stringify(result))
                       return resolve(row); 
              } )
          })
}

export default connection