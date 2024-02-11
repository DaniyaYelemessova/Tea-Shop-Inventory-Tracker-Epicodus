import React, { Component } from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import { v4 } from 'uuid';
import TeaDetail from './TeaDetail';
import EditTeaForm from './EditTeaForm ';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


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
      // teaFormVisible: false,
      
      // teas: [
      //   { id: v4(), name: "Organic Jasmine", price: 3, typeOfTea: "Herbal tea", inStock: 10, outOfStock: "Out of Stock" },
      //   { id: v4(), name: "Winter Forest Green Tea", price: 5.80, typeOfTea: "Green tea", inStock: 20, outOfStock: "Out of Stock" },
      //   { id: v4(), name: "Vanilla", price: 8.80, typeOfTea: "black tea", inStock: 15, outOfStock: "Out of Stock" },
      // ],
      selectedTea: null,
      editing: false 
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        selectedTea: null,
        editing: false
      })
      }else{
        const { dispatch } = this.props;
        const action = a.toggleForm()
    dispatch(action);
      }
    }

  handleAddingNewTeaToList = (newTea) => {
    const { dispatch } = this.props;
    const action = a.addTea(newTea);
    dispatch(action);
    const action2  = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.props.teas[id];
    this.setState({selectedTea: selectedTea})
  }

  handleDeletingTea = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTea(id);
    dispatch(action);
    this.setState({
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

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTea(teaToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTea: null
    })
  }


  render() {
    let currentVisibilityState = null;
    let buttonText = null;

    if(this.state.editing){
      currentVisibilityState = <EditTeaForm 
      tea = {this.state.selectedTea}
      onEditTea={this.handleEditingTeaInList}/>
      buttonText = "Return to Tea List";
    }
    else if(this.state.selectedTea != null){
      currentVisibilityState = 
      <TeaDetail 
      tea={this.state.selectedTea} 
      onClickingDelete={this.handleDeletingTea}
      onClickingDecreaseNum={this.handleDecreasingNumberOfTea}
      onClickingEdit = {this.handleEditClick}
      />
      buttonText = "Return to Tea List";
    }
    else if(this.props.teaFormVisible){
      currentVisibilityState = <NewTeaForm onNewTeaSelection={this.handleAddingNewTeaToList} />
      buttonText= "Return to Tea List"
    }else{
      currentVisibilityState = <TeaList
      teas={this.props.teas}
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


TeaControl.propTypes = {
  teas: PropTypes.object,
  teaFormVisible: PropTypes.bool
}; 

const mapStateToProps = state => {
  return {
    teas: state.teas,
    teaFormVisible: state.teaFormVisible
  }
}

TeaControl = connect(mapStateToProps)(TeaControl)
export default TeaControl;