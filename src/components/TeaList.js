import React from 'react';
import Tea from './Tea';
import { v4 } from 'uuid';

const teas= 
  [
    { id: v4(), name: "Organic Jasmine", price: 3, type: "Herbal tea", inStock: 10, outOfStock: "Out of Stock" },
    { id: v4(), name: "Winter Forest Green Tea", price: 5.80, type: "Green tea", inStock: 20, outOfStock: "Out of Stock" },
    { id: v4(), name: "Vanilla", price: 8.80, type: "black tea", inStock: 15, outOfStock: "Out of Stock" },
  ]



function TeaList() {
  return (
    <React.Fragment>
      <div className='mainStyling'>
      {teas.map((tea, index) =>
      <Tea
        name={tea.name}
        price={tea.price}
        type={tea.type}
        inStock={tea.inStock}
        key={index}
      />)}
      </div>
    </React.Fragment>
  )
}

export default TeaList