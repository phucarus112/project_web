const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
   connectionLimit: 50,
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'Phucarus112',
   database: 'mydb',
   insecureAuth : true
});

const mysql_query = util.promisify(pool.query).bind(pool);

module.exports = {

   load: sql => mysql_query(sql),
   add: (mobile,entity) => mysql_query(`insert into mobile set ?`,entity)

  /*load: sql => new Promise((done,fail) => {
   var connection = mysql.createConnection({
      
   });

   connection.connect();

   connection.query(sql, (error,results,fields) =>{
      if(error)
      {
         fail(error);
      }
       else
       {
         done(results);
       }
      

      connection.end();
   });*/
 };