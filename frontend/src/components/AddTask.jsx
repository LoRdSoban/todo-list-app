import React, { useRef } from 'react';
import { Plus } from 'lucide-react';

const AddTask = ({ newTask, setNewTask, addTask }) => {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 shadow-lg border border-white/30">
      <div className="flex items-center space-x-3">
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task..."
          className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-sm"
        />
        <button
          onClick={addTask}
          className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AddTask; 