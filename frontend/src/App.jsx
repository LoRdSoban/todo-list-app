import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    const res = await axios.post('http://localhost:5000/api/tasks', { task: newTask });
    setTasks([res.data, ...tasks]);
    setNewTask('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTask = async (id) => {
    const res = await axios.patch(`http://localhost:5000/api/tasks/${id}/toggle`);
    setTasks(tasks.map((task) => task._id === id ? res.data : task));
  };

  const toggleDropdown = (taskId) => {
    setOpenDropdown(openDropdown === taskId ? null : taskId);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://ohmyfacts.com/wp-content/uploads/2024/06/45-facts-about-the-golden-gate-bridge-1717908577.jpg)'
      }}
    >
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />

        {/* Main Container */}
        <div className="max-w-md mx-auto">
          {/* Header Section */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 shadow-lg border border-white/30">
            <div className="flex items-center justify-between">
                <span className="text-white font-medium">To do today</span>
              <div className="w-4 h-4 border-2 border-white/50 border-l-0 border-t-0 rotate-45 transform"></div>
            </div>
          </div>

          <AddTask 
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />

          <TaskList 
            tasks={tasks}
            loading={loading}
            onToggle={toggleTask}
            onDelete={deleteTask}
            openDropdown={openDropdown}
            onToggleDropdown={toggleDropdown}
          />
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-0"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
};

export default App;
