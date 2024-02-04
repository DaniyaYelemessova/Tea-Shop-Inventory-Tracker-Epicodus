import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTeaForm(props) {

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
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm