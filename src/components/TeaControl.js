import React, { Component } from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import { v4 } from 'uuid';
import TeaDetail from './TeaDetail';


class TeaControl extends Component {

    buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      cursor: 'pointer',
      marginTop: "20px",
      display: 'block',
      margin: 'auto',
      marginBottom: "40px"
  };

  constructor(props) {
    super(props);
    this.state = {
      teaFormVisible: false,
      teas: [
        { id: v4(), name: "Organic Jasmine", price: 3, type: "Herbal tea", inStock: 10, outOfStock: "Out of Stock" },
        { id: v4(), name: "Winter Forest Green Tea", price: 5.80, type: "Green tea", inStock: 20, outOfStock: "Out of Stock" },
        { id: v4(), name: "Vanilla", price: 8.80, type: "black tea", inStock: 15, outOfStock: "Out of Stock" },
      ],
    };
  }



  render() {
    let currentVisibilityState = null;
    let buttonText = null;

    if(this.state.selectedTea != null){
      currentVisibilityState = 
      <TeaDetail 
      />
      buttonText = "Return to Ticket List";
    }
    else if(this.state.teaFormVisible){
      currentVisibilityState = <NewTeaForm />
      buttonText= "Return to Tea List"
    }else{
      currentVisibilityState = <TeaList
      teas={this.state.teas}
      />
      buttonText="Add Tea"
    }
    return (
      <React.Fragment>
        <button style={this.buttonStyle} >{buttonText}</button>
        {currentVisibilityState}
      </React.Fragment>
    )
  }
}

export default TeaControl;