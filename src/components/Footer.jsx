import React from 'react'

const Footer = ({planner}) => {
 if(!planner.length)
 return(
<div className='stats'>
     
     {/* <em>You have (x) ites in your list and have packed (x) (x%)</em> */}
     <em>Start adding items to your packing list</em>
    </div>
 )
const packedItem = planner.length;
const percentagePacked = planner.filter(item => item.packed).length;
const calculatedPacked = (percentagePacked/packedItem * 100)
  return (
    <div className='stats'>
     
     {
      calculatedPacked === 100 ? <em>You have packed all items and ready to go</em> : <em>You have {packedItem} items in your list and have packed {percentagePacked} ({calculatedPacked}%)</em>
     }
     
     {/* <em>Start adding items to your packing list</em> */}
    </div>
  )
 
}

export default Footer