const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from watch_list'),
    add: entity => db.add(`watch_list`, entity),
};