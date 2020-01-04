const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from mobile'),
    add: entity => db.add('mobile', entity),
    del: id => db.del('mobile', {CAT_ID: id}),
    patch: entity => {
        const condition = {CAT_ID: entity.CAT_ID};
        delete entity.CAT_ID;
        return db.patch('mobile', entity, condition);
    }
}