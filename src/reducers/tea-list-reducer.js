import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, price, typeOfTea, inStock, outOfStock,  id } = action;
  switch (action.type){
    case c.ADD_TEA:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          typeOfTea: typeOfTea,
          inStock: inStock,
          outOfStock: outOfStock,
          id: id
        }
      });
    case c.DELETE_TEA:
      let newState = { ...state };
      delete newState[id];
      return newState;
      default:
        return state;
  }
};  

export default reducer; 