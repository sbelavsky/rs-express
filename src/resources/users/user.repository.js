const { getDB } = require('../../common/db');

const users = () => getDB().collection('users');

const getAll = async () => {
  return users()
    .find({})
    .toArray();
};

const create = async user => {
  await users().insertOne(user);
};

const get = async id => {
  return users().findOne({ id });
};

const update = async (id, options) => {
  return users().findOneAndUpdate({ id }, { $set: options });
};

const remove = async id => {
  await users().deleteOne({ id });
};

module.exports = { getAll, create, getByID: get, update, remove };
