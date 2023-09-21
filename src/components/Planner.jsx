import React from 'react'

const Planner = ({planner, setPlanner}) => {

 const handleDelete = function(id){
  setPlanner(planner.filter(item => item.id !== id))
 }

 const handleToggle =(id)=> {
  setPlanner(planner.map(item => item.id === id ? {...item, packed:!item.packed } : item)  )
  console.log("hello");
 }
 const handleClear = ()=>{
  setPlanner([])
 }
  return (
    <div className='list'>


    <ul>
     {
      planner.map(item => 
    
     <li key={item.id}>
      <input value={item.packed} type="checkbox" onChange={()=>handleToggle(item.id)}/>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.select} {item.input}
      </span>
      <button onClick={()=> handleDelete(item.id)}>❌</button>
      </li>
   
      )
     }
    </ul>
     <button onClick={handleClear}>Clear all</button>

    </div>
  )
}

export default Planner