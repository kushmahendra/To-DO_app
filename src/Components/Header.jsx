import React, { useState } from 'react';
import Items from './Items';

const Header = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState(["I have to do some task !"]);

  const AddTodo = () => {
    if (todo !== "") {
      setTodolist((prev) => [...prev, todo]);
      setTodo(""); // Clear the input after adding
    }
  };

  const deleteTodo = (index) => {
    setTodolist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
    <div className=" bg-purple-200 ">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-purple-200 border border-yellow-600 rounded-xl">
        <div className="text-2xl font-semibold text-center mb-4">To Do App</div>
        <div className="m-4 p-4 flex flex-col sm:flex-row border border-gray-300 rounded-2xl justify-between items-center bg-blue-400 gap-2">
          <h1 className="text-lg mb-2 sm:mb-0">Make lists .....</h1>
          <input
            type="text"
            placeholder="Add list"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border border-gray-400 rounded-lg p-2 flex-grow mb-2 sm:mb-0"
          />
          <i
            onClick={() => AddTodo()}
            className="fa-solid fa-plus cursor-pointer border bg-green-500 text-white py-2 px-4 rounded-lg"
          ></i>
        </div>
        <div className="border-t border-gray-400 mt-4"></div>
        <div className="mt-4">
          {todolist.map((item, index) => (
            <Items key={index} title={item} deleteTodo={deleteTodo} // Pass the deleteTodo function
            index={index} // Pass the index of the item
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;

