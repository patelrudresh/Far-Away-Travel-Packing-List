import React from 'react'
import './status.css'
function Status({deleteList,onSort,Item}) {
      const totalItem=Item.length;
   const packedItem=Item.filter((i)=>i.packed).length;
   const percentage= totalItem===0?0:((packedItem/totalItem)*100);
  return (
    <div >
       <div className="status-container">
        <select  onChange={(e) => onSort(e.target.value)}>
        <option value="description">Sort by description</option>
        <option value="quantity">Sort by quantity</option>
        <option value="packed">Sort by packed</option>
      </select>

        <button className="clear-btn" onClick={(e)=>deleteList()}
         >Clear</button>
         </div>
         {totalItem==0?"start Adding some item to your packing list":<em className="status-title"> total item is {totalItem} and  packed Item {packedItem}   ( {percentage} %)</em>}
    </div>
  )
}

export default Status
