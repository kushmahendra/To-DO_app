import React, { useState } from 'react';
import Items from './Items';
import TaskDetail from './Taskdetail';

const Header = () => {
  const [todolist, setTodolist] = useState([
    { title: "I have to do some task!", priority: "Medium", dateTime: "2024-08-15T12:00" }
  ]);
  const [showTaskDetail, setShowTaskDetail] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTodo = (newTask) => {
    if (currentTask !== null) {
      setTodolist((prev) => 
        prev.map((item, index) => 
          index === currentTask.index ? { ...item, ...newTask } : item
        )
      );
    } else {
      setTodolist((prev) => [...prev, newTask]);
    }
    setShowTaskDetail(false);
    setCurrentTask(null);
  };

  const deleteTodo = (index) => {
    setTodolist((prev) => prev.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    const taskToEdit = todolist[index];
    setCurrentTask({ ...taskToEdit, index });
    setShowTaskDetail(true);
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-300 min-h-screen p-4 sm:p-6 md:p-8 flex justify-center items-center">
      <div className="bg-yellow-100 shadow-lg border border-yellow-600 rounded-xl w-full sm:w-[90%] md:w-[75%] lg:w-[50%] h-auto p-4 sm:p-6 md:p-8">
        <div className="text-2xl sm:text-3xl font-bold text-center text-white bg-green-800 border border-green-500 py-3 sm:py-4 rounded-lg mb-4 sm:mb-6">
          To Do App
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Tasks</h1>
            <div className="flex-1"></div>
            <button
              onClick={() => setShowTaskDetail(true)}
              className="bg-green-600 text-white py-2 px-3 sm:px-4 rounded-lg shadow-md hover:bg-green-900 transition-colors duration-300"
            >
              Add Task
            </button>
          </div>
        </div>

        {showTaskDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full sm:w-[90%] md:w-[75%] lg:w-[50%] p-4 sm:p-6 rounded-lg shadow-lg">
              <TaskDetail 
                onClose={() => setShowTaskDetail(false)} 
                onAdd={handleAddTodo}
                task={currentTask} 
              />
            </div>
          </div>
        )}

        <div className="border-t border-gray-400 mt-3 sm:mt-4"></div>
        <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
          {todolist.map((item, index) => (
            <Items
              key={index}
              title={item.title}
              priority={item.priority}
              dateTime={item.dateTime}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
