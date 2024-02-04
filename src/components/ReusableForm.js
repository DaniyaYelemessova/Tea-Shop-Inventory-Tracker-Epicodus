import React from 'react';
import PropTypes from "prop-types";

function ReusableForm(props) {

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


  return (
    <React.Fragment>
      <div className='container form'>
      <h1>Fill this form</h1>
      <form style={formStyle} onSubmit={props.formSubmissionHandler}>
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
        <button style={buttonStyle} type='submit'>{props.buttonText}</button>
      </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm