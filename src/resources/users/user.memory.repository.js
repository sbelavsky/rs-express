const DB = require('../../common/inmemory_db');

const getAll = async () => {
  return DB.users;
};

const create = async user => {
  DB.users.push(user);
};

const getByID = async id => {
  return DB.users.find(u => u.id === id);
};

const update = async user => {
  const index = DB.users.findIndex(u => u.id === user.id);
  DB.users[index] = user;
  return await getByID(user.id);
};

const remove = async id => {
  DB.users = DB.users.filter(u => u.id === id);
};

module.exports = { getAll, create, getByID, update, remove };
