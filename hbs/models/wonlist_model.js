const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from won_list'),
    add: entity => db.add(`won_list`, entity),
};