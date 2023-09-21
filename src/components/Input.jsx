import React from 'react';
import { useState } from 'react';

const Input = ({planner, setPlanner}) => {
 const [input, setInput] = useState('')
 const [select, setSelect] = useState(1)

 const handleSubmit = function(e){
    e.preventDefault()
    if(!input)return alert("Input field cannot be empty");
    const newItem = {input, select, packed:false, id:Date.now()}
    setPlanner([...planner, newItem])
    setInput(""); setSelect(1)
   }




  return (
   
    <div>
     <form onSubmit={handleSubmit} className='add-form'>
      <h3>What do you need for your trip</h3>
      <select value={select} onChange={(e)=>setSelect(e.target.value)}>
       {Array.from({length:20}, (_, i)=> i+1).map(num => <option key={num}>{num}</option>)}
      </select >

      <input type="text" placeholder='item' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button>Add</button>

     
     </form>
     </div>
  )
}

export default Input