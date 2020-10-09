const User = require('../resources/users/user.model');
const DB = {
  users: []
};

function init() {
  DB.users.push(new User());
}

init();
module.exports = DB;
