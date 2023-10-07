import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';


function Todo() {
 
  const [inputList, setInputList]= useState("");
  
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id)=> {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
};


  return (
    <div class='main'>
      <h1>ToDo List</h1>
      <br/>
      <div class="input">
      <input type='text' placeholder='Add a Item' 
       value={inputList}
      onChange={itemEvent} />
      <button onClick={listOfItem}> + </button>
      </div>

      <ol>
        {Items.map( (itemval, index) => {
         return <TodoList 
         key={index} 
         id={index}
         text={itemval}
         onSelect={deleteItems}
         />  
        })}
      </ol>
    </div>
  )
}

export default Todo 