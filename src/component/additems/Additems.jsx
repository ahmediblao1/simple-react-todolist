/* eslint-disable react/prop-types */
import  { useState } from 'react';

function Additem({ addItem }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || age.trim() === '') {
        return false;
    } else {
        // Create a new item object
    const newItem = {
        id: Date.now(), // Generate a unique ID 
        name: name,
        age: age
      };
  
      // Pass the new item to the addItem function in the parent component
      addItem(newItem);
  
      // Reset the input fields
      setName('');
      setAge('');
    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={name} placeholder='Enter the Task '  onChange={handleNameChange} />
      </label>
      <label>
        <input type="text" value={age} placeholder='Enter the description ' onChange={handleAgeChange} />
      </label>
      <input type="submit" value= "Add" />
    </form>
  );
}

export default Additem;
