import React,{useState} from 'react'

const Items = (props) => {
  const { title, deleteTodo, index } = props;
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    if (checked) {
      deleteTodo(index); // Call the delete function with the index of the item if checked
    }
  };

  return (
    <>
    <div className='grid grid-cols-1'>
    <div className='flex gap-4 m-4 border border-gray-400 rounded 
 items-center  bg-orange-200 py-1 px-2' >
      <input type="checkbox" 
        checked={checked}
        onChange={() => setChecked(!checked)} />
        
      <span className="text-center flex-1">{props.title}</span>

      <i  onClick={handleDelete} class="fa-solid fa-trash   "></i>
    </div>
    </div>
    
    </>
  )
}

export default Items