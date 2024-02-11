import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditTeaForm (props) {
  const { tea } = props;
  function handleEditTeaFormSubmission(e){
    e.preventDefault();
    props.onEditTea({name: e.target.name.value, price: e.target.price.value, inStock: e.target.inStock.value, typeOfTea: e.target.typeOfTea.value, id: tea.id   })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText="Edit Tea" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};

export default EditTeaForm 