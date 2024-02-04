import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingDecreaseNum } = props;

  const buttonStyle = {
    backgroundColor: "brown",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer"
  };

  const buttonSell = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  };

  const buttonStyleEdit = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  };

  const outOfStockMsg = {
    color: "red",
    fontStyle: "italic",
    display: tea.inStock === 0 ? "block" : "none",
  };

  const h3 = {
    fontFamily: "Kaushan Script",
  };

  return (
    <React.Fragment>
      <div className="detailStyle container form">
        <h1>Ticket Detail</h1>
        <h3 style={h3}>Name: {tea.name}</h3>
        <p>
          <strong>Tea price:</strong> {tea.price}
        </p>
        <p>
          <strong>Type:</strong> {tea.type}
        </p>
        <p>
          <strong>in Stock:</strong>
          {tea.inStock}
        </p>
        <p style={outOfStockMsg}>Out of Stock</p>
        <div className="buttonGroup">
          <button style={buttonStyleEdit} onClick={props.onClickingEdit}>
            Update Tea
          </button>
          <button style={buttonStyle} onClick={() => onClickingDelete(tea.id)}>
            Delete
          </button>
          <button
            style={buttonSell}
            onClick={() => onClickingDecreaseNum(tea.id)}
          >
            Sell
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingDecreaseNum: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;
