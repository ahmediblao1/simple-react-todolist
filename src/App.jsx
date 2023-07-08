/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Todoitems from './component/todoitems/todoitems'
import Additem from './component/additems/additems'

function App() {
const [items, setitems] = useState([
  
])

const deleteItem = (id) => {
  const updatedItems = items.filter((item) => item.id !== id);
  setitems(updatedItems);
};

const addItem = (newItem) => {
  setitems((prevItems) => [...prevItems, newItem]);
};

  return (
    <div className='App container'>
    <h1>TodoList</h1>
    <Todoitems items ={items} deleteItem={deleteItem}  />
    <Additem addItem={addItem} />
    </div>
  )
}

export default App
