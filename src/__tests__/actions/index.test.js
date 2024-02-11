import * as actions from './../../actions';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTea should create ADD_TEA action', () => {
    expect(actions.addTea({
      name: 'Organic Jasmine',
      price: 3,
      typeOfTea: "Herbal tea",
      inStock: 10,
      outOfStock: "Out of Stock",
      id: 1
    })).toEqual({
      type: 'ADD_TEA',
      name: 'Organic Jasmine',
      price: 3,
      typeOfTea: "Herbal tea",
      inStock: 10,
      outOfStock: "Out of Stock",
      id: 1
    });
  });
});