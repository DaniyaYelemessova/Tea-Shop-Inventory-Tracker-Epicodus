import React from 'react';
import Tea from './Tea';
import PropTypes from "prop-types";


function TeaList({ teas, onTeaSelection}) {
  return (
    <React.Fragment>
      <div className='mainStyling'>
      {Object.values(teas).map((tea) =>
      <Tea
        whenTeaTypeClicked = {onTeaSelection} 
        name={tea.name}
        price={tea.price}
        typeOfTea={tea.typeOfTea}
        inStock={tea.inStock}
        id={tea.id}
        key={tea.id}
      />)}
      </div>
    </React.Fragment>
  )
}

TeaList.propTypes = {
  teas: PropTypes.object,
  onTeaSelection: PropTypes.func
};

export default TeaList