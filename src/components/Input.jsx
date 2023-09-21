import React from 'react'

const Input = () => {
  return (
    <div>
     <form action="" className='add-form'>
      <h3>What do you need for your trip</h3>
      <select >
       {Array.from({length:20}, (_, i)=> i+1).map(num => <option key={num}>{num}</option>)}
       
      </select>
      <input type="text" placeholder='item'/>
      <button>Add</button>
     </form>
     </div>
  )
}

export default Input