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
      selectedTea: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        teaFormVisible: false,
        selectedTea: null
      })
      }else{
        this.setState(prevState => ({
          teaFormVisible: !prevState.teaFormVisible
        }))
      }
      
  }

  handleAddingNewTeaToList = (newTea) => {
    const newTeaList = this.state.teas.concat(newTea);
    this.setState({teas: newTeaList,
    teaFormVisible: false})
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.teas.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea})
  }

  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.teas.filter(tea => tea.id !== id);
    this.setState({
      teas: newMainTeaList,
      selectedTea: null
    })
  }

  handleDecreasingNumberOfTea = (id) => {
    const selectedTea = this.state.teas.filter(teaName => teaName.id === id)[0];
    if(selectedTea.inStock > 1) {
      const newNumberOfTea = Object.assign(selectedTea, (selectedTea.inStock -= 1));
      const modifiedTeaList = this.state.teas.filter(teaName => teaName.id !== this.state.selectedTea.id).concat(newNumberOfTea);
      this.setState({
        teas: modifiedTeaList,
      });
    }else if(selectedTea.inStock === 1 ){
      const newNumberOfTea = Object.assign(selectedTea, (selectedTea.inStock -= 1), (selectedTea.outOfStock = "Out of Stock"));
      const modifiedTeaList = this.state.teas.filter(teaName => teaName.id !== this.state.selectedTea.id).concat(newNumberOfTea);
      this.setState({
        teas: modifiedTeaList,
      });
    }
  }




  render() {
    let currentVisibilityState = null;
    let buttonText = null;

    if(this.state.selectedTea != null){
      currentVisibilityState = 
      <TeaDetail 
      tea={this.state.selectedTea} 
      onClickingDelete={this.handleDeletingTea}
      onClickingDecreaseNum={this.handleDecreasingNumberOfTea}
      />
      buttonText = "Return to Ticket List";
    }
    else if(this.state.teaFormVisible){
      currentVisibilityState = <NewTeaForm onNewTeaSelection={this.handleAddingNewTeaToList} />
      buttonText= "Return to Tea List"
    }else{
      currentVisibilityState = <TeaList
      teas={this.state.teas}
      onTeaSelection={this.handleChangingSelectedTea}
      />
      buttonText="Add Tea"
    }
    return (
      <React.Fragment>
        <button style={this.buttonStyle} onClick={this.handleClick}>{buttonText}</button>
        {currentVisibilityState}
        
      </React.Fragment>
    )
  }
}

export default TeaControl;