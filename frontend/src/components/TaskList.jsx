import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, loading, onToggle, onDelete, openDropdown, onToggleDropdown }) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-white/70">Loading tasks...</div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-white/70">No tasks yet. Add one above!</div>
      </div>
    );
  }

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto transparent-scrollbar">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          openDropdown={openDropdown}
          onToggleDropdown={onToggleDropdown}
        />
      ))}
    </div>
  );
};

export default TaskList;