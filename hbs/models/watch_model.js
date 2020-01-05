const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from product where CAT_ID = 4'),
    single: id => db.load( `select * from product where CAT_ID = 4 && ID = ${id}`),
    add: entity => db.add('product',entity),
    del: id =>  db.del('product',{ID: id}),
    patch: entity => {
        const condition = {ID: entity.ID};
        delete entity.ID;
        console.log(entity,condition);
       return db.patch('product',entity,condition);
    }
}