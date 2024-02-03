import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTeaForm(props) {

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    maxWidth: '300px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer'
  };


function handleNewTeaFormSubmission(e){
  e.preventDefault();
  props.onNewTeaSelection({
    name: e.target.name.value,
    price: parseInt(e.target.price.value),
    type: e.target.type.value,
    inStock: e.target.inStock.value,
    id: v4()
  })
}
  return (
    <React.Fragment>
      <div className='container form'>
      <h1>Fill this form</h1>
      <form style={formStyle} onSubmit={handleNewTeaFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='Tea Name' required/>
        <input
          type="number"
          name='price'
          placeholder='Price' required/>
          <input
          type="number"
          name='inStock'
          placeholder='in Stock' required/>
        <input
          type='text'
          name='type'
          placeholder='Type of tea' required/>
        <button style={buttonStyle} type='submit'>Add new tea</button>
      </form>
      </div>
    </React.Fragment>
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm