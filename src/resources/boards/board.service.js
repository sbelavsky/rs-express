const { NotFoundError } = require('../../common/errors');
const boardRepository = require('./board.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = async () => boardRepository.getAll();

const create = async task => boardRepository.create(task);

const get = async id => {
  const board = await boardRepository.get(id);
  if (!board) {
    throw new NotFoundError();
  }
  return board;
};

const update = async (id, options) => {
  const existing = await boardRepository.get(id);
  if (!existing) {
    throw new NotFoundError();
  }
  const newBoard = Object.assign(existing, options);
  return await boardRepository.update(newBoard);
};

const remove = async id => {
  const boardTasks = await taskService.getByBoardId(id);
  if (boardTasks) {
    boardTasks.map(t => t.id).forEach(ID => taskService.remove(ID));
  }
  boardRepository.remove(id);
};

module.exports = { getAll, create, get, update, remove };
