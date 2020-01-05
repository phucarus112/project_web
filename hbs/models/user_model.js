const db = require('../utils/db');

module.exports = {
    allUser: () => db.loadUser('select * from user'),
}