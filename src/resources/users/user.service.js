const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = async () => usersRepo.getAll();

const create = async user => usersRepo.create(user);

const getById = async id => usersRepo.getByID(id);

const update = async (id, options) => {
  const existingUser = await usersRepo.getByID(id);
  const newUser = Object.assign(existingUser, options);
  return usersRepo.update(newUser);
};

const remove = async id => {
  const tasks = await taskService.getByUserId(id);
  if (tasks) {
    tasks.forEach(t => taskService.unassign(t.id));
  }
  usersRepo.remove(id);
};

module.exports = { getAll, create, getById, update, remove };
