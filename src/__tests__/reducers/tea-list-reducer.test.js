import teaListReducer from "../../reducers/tea-list-reducer";


describe('teaListReducer', () => {
  let action;
  const teaData = {
    name: 'Organic Jasmine',
    price: 3,
    typeOfTea: "Herbal tea",
    inStock: 10,
    outOfStock: "Out of Stock",
    id: 1
  };

  const currentState = {
    1: {
      name: 'Organic Jasmine',
      price: 3,
      typeOfTea: "Herbal tea",
      inStock: 10,
      outOfStock: "Out of Stock",
      id: 1
    }, 2: {
      name: 'Winter Forest Green Tea',
      price: 5.80,
      typeOfTea: "Green tea",
      inStock: 20,
      outOfStock: "Out of Stock",
      id: 2
    }
  }

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TEA',
      id: 1
    };
    expect(teaListReducer(currentState, action)).toEqual({
      2: {
      name: 'Winter Forest Green Tea',
      price: 5.80,
      typeOfTea: "Green tea",
      inStock: 20,
      outOfStock: "Out of Stock",
      id: 2
      }
    });
  });

  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(teaListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new tea data to teas', () => {
    const { name, price, typeOfTea, inStock, outOfStock, id } = teaData;
    action = {
      type: 'ADD_TEA',
      name: name,
      price: price,
      typeOfTea: typeOfTea,
      inStock: inStock,
      outOfStock: outOfStock,
      id: id
    };

    expect(teaListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        price: price,
        typeOfTea: typeOfTea,
        inStock: inStock,
        outOfStock: outOfStock,
        id: id
      }
    });
  });
});