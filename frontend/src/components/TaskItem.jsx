import React from 'react';
import { MoreHorizontal, Check } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const TaskItem = ({ task, onToggle, onDelete, openDropdown, onToggleDropdown }) => {
  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-lg border border-white/30 group hover:bg-neutral-200 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => onToggle(task._id, !task.completed)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed 
                ? 'bg-green-500 border-green-500' 
                : 'border-amber-900 hover:border-amber-600'
            }`}
          >
            {task.completed && <Check className="w-3 h-3 text-white" />}
          </button>
          <span 
            className={`text-black flex-1 ${
              task.completed ? 'line-through opacity-70' : ''
            }`}
          >
            {task.task}
          </span>
        </div>
        
        <div className="relative">
          <button
            onClick={() => onToggleDropdown(task._id)}
            className="w-8 h-8 bg-amber-900 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
          >
            <MoreHorizontal className="w-4 h-4 text-white" />
          </button>
          
          {openDropdown === task._id && (
            <DropdownMenu onDelete={() => onDelete(task._id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem; 