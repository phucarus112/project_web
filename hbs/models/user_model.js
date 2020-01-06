const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from user'),
    single: id => db.load( `select * from user where ID = ${id}`),
    add: entity => db.add('user',entity),
    del: id =>  db.del('user',{ID: id}),
    

}