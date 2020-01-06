const db = require('../utils/db');

module.exports = {
    
    allUser: () => db.loadUser('select * from user'),
    single: id => db.loadUser(`select * from user where ID = ${id}`),
    singleByUserName: async username =>{
      
      const rows = await db.loadUser(`select * from user where USERNAME= '${username}'`);
      if (rows.length===0)
       return null;
       return rows[0];
    }
}