import React, { useState } from 'react';

const Items = ({ title, priority, dateTime, deleteTodo, editTodo, index }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    if (checked) {
      deleteTodo(index);
    }
  };

  return (
    <div className='border border-green-500 rounded-lg p-4'>
      <h1 className='p-1 text-start font-semibold'>Priority: <span className='text-red-500'>{priority}</span></h1>
      <h1 className='p-1 text-start  font-semibold'>Date-Time: <span className='text-purple-500'>{dateTime}</span></h1>
      
      <div className='flex gap-4 mt-2 border border-gray-400 rounded-lg items-center bg-gradient-to-r from-gray-200 to-gray-300 py-2 px-4 shadow-lg'>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-center flex-1 text-lg font-medium">{title}</span>
        <i
          onClick={() => editTodo(index)}
          className="fa-solid fa-edit cursor-pointer text-green-600 hover:text-green-800 transition-colors duration-300"
        ></i>
        <i
          onClick={handleDelete}
          className="fa-solid fa-trash cursor-pointer text-red-600 hover:text-red-800 transition-colors duration-300"
        ></i>
      </div>
    </div>
  );
};

export default Items;
