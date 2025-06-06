const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

const addTask = async (req, res) => {
  const task = new Task({ task: req.body.task });
  await task.save();
  res.status(201).json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

const toggleComplete = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  task.completedAt = task.completed ? new Date() : null;
  await task.save();
  res.json(task);
};

module.exports = { getTasks, addTask, deleteTask, toggleComplete };