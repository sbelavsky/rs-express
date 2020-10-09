const { NotFoundError } = require('../../common/errors');
const tasksRepo = require('./task.memory.repository');

const getAll = async () => tasksRepo.getAll();

const create = async task => tasksRepo.create(task);

const get = async id => {
  const task = await tasksRepo.get(id);
  if (!task) {
    throw new NotFoundError();
  }
  return task;
};

const getByBoardId = async boardId => tasksRepo.getByBoardId(boardId);
const getByUserId = async userId => tasksRepo.getByUserId(userId);
const update = async (id, options) => {
  const existing = await tasksRepo.get(id);
  const newTask = Object.assign(existing, options);
  return tasksRepo.update(newTask);
};

const remove = async id => tasksRepo.remove(id);

const unassign = async id => {
  const task = await tasksRepo.get(id);
  task.userId = null;
  return tasksRepo.update(task);
};

module.exports = {
  getAll,
  create,
  get,
  update,
  remove,
  getByBoardId,
  unassign,
  getByUserId
};
