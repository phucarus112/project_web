const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: () => db.load('select * from product where CAT_ID = 2'),
    detail: id => db.load(`select * from product where ID = ${id}`),
    single: id => db.load( `select * from product where CAT_ID = 2 && ID = ${id}`),
    pageByCat: (catId,offset) => db.load( `select * from product where CAT_ID = 2 limit 
    ${config.paginate.limit} offset ${offset}`),
    countByCat: async catId =>{
        const rows = await db.load( `select count(*) as total from product where CAT_ID = 2`);
        return rows[0].total ;
    },
    add: entity => db.add('product',entity),
    del: id =>  db.del('product',{ID: id}),
    patch: entity => {
        const condition = {ID: entity.ID};
        delete entity.ID;
        console.log(entity,condition);
       return db.patch('product',entity,condition);
    }
}