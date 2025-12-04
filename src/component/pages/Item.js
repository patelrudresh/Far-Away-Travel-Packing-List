import React, { useState } from 'react'
import Form from './Form';
import ProductList from './ProductList';
import Footer from '../Footer';
import Status from './Status';

function Item() {
  const [item, setItem] = useState([]);

  function handleAddItem(newItem) {
    setItem((prev) => [...prev, newItem])
  }

  function deleteItem(id) {
    setItem((de) => de.filter(item => item.id !== id))
  }
  function deletelist() {
    setItem([]);
  }
   function handlesort(type){
     const sorted=[...item];

       if (type === "description") {
    sorted.sort((a, b) => a.description.localeCompare(b.description));
  }
     if(type ==="quantity"){
      sorted.sort((a,b)=>a.opt-b.opt)
     }
     if(type ==="packed"){
      sorted.sort((a,b)=>Number(a.packed)-Number(b.packed))
     }
     setItem(sorted);
   }

   function handletoggle(id){
        setItem((d)=>d.map(item=>item.id==id?
          {...item,packed:!item.packed}:
          item
        ))
   }
  return (
    <div>
       <Form onAddItem={handleAddItem} />

       {item==0?"":<ProductList items={item}
        onDelete={deleteItem}
        ontoggle={handletoggle}
      />
  }
      <Status deleteList={deletelist}
       onSort={handlesort}
       Item={item} />
       
    </div>
  )
}

export default Item
