const usersRepo = require('./user.memory.repository');

const getAll = async () => await usersRepo.getAll();

const create = async user => await usersRepo.create(user);

const getById = async id => await usersRepo.getByID(id);

const update = async (id, options) => {
  const existingUser = await usersRepo.getByID(id);
  const newUser = Object.assign(existingUser, options);
  return await usersRepo.update(newUser);
};

const remove = async id => await usersRepo.remove(id);

module.exports = { getAll, create, getById, update, remove };
