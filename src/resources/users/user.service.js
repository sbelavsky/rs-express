const usersRepo = require('./user.repository');
const taskService = require('../tasks/task.service');

const getAll = async () => usersRepo.getAll();

const create = async user => usersRepo.create(user);

const getById = async id => usersRepo.getByID(id);

const update = async (id, options) => {
  return usersRepo.update(id, options);
};

const remove = async id => {
  const tasks = await taskService.getByUserId(id);
  for (const task of tasks) {
    await taskService.unassign(task.id);
  }
  await usersRepo.remove(id);
};

module.exports = { getAll, create, getById, update, remove };
