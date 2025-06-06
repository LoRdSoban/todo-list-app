const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', controller.getTasks);
router.post('/', controller.addTask);
router.delete('/:id', controller.deleteTask);
router.patch('/:id/toggle', controller.toggleComplete);

module.exports = router;
