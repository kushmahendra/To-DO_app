import React, { useState, useEffect } from 'react';

const TaskDetail = ({ onClose, onAdd, task }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setPriority(task.priority);
      setDateTime(task.dateTime);
    }
  }, [task]);

  const handleAdd = () => {
    if (title) {
      onAdd({ title, priority, dateTime });
    }
  };

  return (
    <div className='border border-yellow-600  shadow-lg rounded-lg p-6 bg-gradient-to-r from-blue-50 via-green-50
     to-yellow-50 max-w-lg mx-auto my-10'>
      <h1 className='text-center font-bold text-4xl text-blue-900 mb-6'>Task Details</h1>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-blue-700 mb-2'>Title</h2>
        <input 
          type="text" 
          placeholder='Add a task title' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full p-3 border border-blue-300 rounded-lg bg-blue-100 focus:outline-none focus:border-blue-500'
        />
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-green-700 mb-2'>Priority</h2>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='w-full p-3 border border-green-300 rounded-lg bg-green-100 focus:outline-none focus:border-green-500'
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      
      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-yellow-700 mb-2'>Deadline</h2>
        <input 
          type="datetime-local" 
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className='w-full p-3 border border-yellow-300 rounded-lg bg-yellow-100 focus:outline-none focus:border-yellow-500'
        />
      </div>

      <div className='flex justify-between mt-8'>
        <button
          onClick={onClose}
          className='py-2 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600'
        >
          Close
        </button>
        <button
          onClick={handleAdd}
          className='py-2 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
