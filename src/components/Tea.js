import React from "react";
import PropTypes from "prop-types";

function Tea(props) {

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    marginRight: "20px"
  };

  const h3 ={
    fontFamily: 'Kaushan Script',
    color: "green"
  }

  return (
    <React.Fragment>
      <div className="container">
      <div onClick = {() => props.whenTeaTypeClicked(props.id)}>
        <h3 style={h3}>{props.name}</h3>
        <p><strong>Price:</strong> {props.price}</p>
        <p><strong>Type:</strong> {props.type}</p>
        <p><strong>in Stock:</strong> {props.inStock}</p>
        <button style={buttonStyle}>See Details</button>
        <hr />
      </div>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string, 
  whenTeaTypeClicked: PropTypes.func 
}

export default Tea;
