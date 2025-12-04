import React, { useState } from 'react'
import './form.css'
function Form( {onAddItem}) {
   const [description,setDescription]=useState("");
   const [opt,setOption]=useState(1);
  
 function handlersubmission(e){
    e.preventDefault();
    if(!description) return;

    
    const newItem={
         id: Date.now(),
       description,
       opt,
      packed: false}
   
    onAddItem(newItem)
    setDescription("");
    setOption(1);

 }
  return (
     <form onSubmit={handlersubmission} className="trip-form">
      <h2> what do you need for your trip ?</h2>
      <div className='form-row'>
            <select value={opt} onChange={(e)=>setOption(Number(e.target.value))}>
                {Array.from({length:10},(_,i)=>i+1)
                .map((num)=><option value={num} key={num}>{num}</option>)}
            </select>
            <input type='text' placeholder='item' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button className='btn add-btn'>Add</button>
            </div>
        </form>
            
    
    
  )
}

export default Form
