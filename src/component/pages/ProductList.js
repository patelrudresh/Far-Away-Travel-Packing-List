import React from 'react'
import './product.css'

function ProductList({ items, onDelete, ontoggle }) {
  return (
    <div className='product-list '>
      <h1> Your List </h1>
      <ul className='row-list'>
        {items.map((prod) =>

          <li key={prod.id}
            className={`item ${prod.packed ?"packed":""}`}
            style={{
              textDecoration: prod.packed ? "line-through" : "none",
              color: prod.packed ? "red" : ""
            }}>
            <input type='checkbox'
              checked={prod.packed}
              onChange={() => ontoggle(prod.id)}></input>
            <span className="item-text">
              {prod.opt} - {prod.description}
            </span>
            <button className="delete-btn"
              onClick={() => onDelete(prod.id)}> ❌</button></li>

        )} </ul>
    </div>
  )
}

export default ProductList
