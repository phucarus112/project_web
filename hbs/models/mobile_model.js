const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from mobile'),
    add: entity => db.add('mobile',entity),
}