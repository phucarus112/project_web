const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
   connectionLimit: 50,
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'Phucarus112',
   database: 'online_auction',
   insecureAuth : true
});

const mysql_query = util.promisify(pool.query).bind(pool);

module.exports = {

   load: sql => mysql_query(sql),
   loadUser: sql => mysql_query(sql),
   add: (mobile,entity) => mysql_query(`insert into product set ?`,entity),
   del: (mobile,condition) => mysql_query(`delete from product where ?`,condition),
   patch: (mobile,entity,condition) => mysql_query(`update product set ? where ?`,[entity,condition]),
   
 };