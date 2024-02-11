import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import teaListReducer from '../../reducers/tea-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Check that initial state of teaListReducer matches root reducer', () => {
    expect(store.getState().teas).toEqual(teaListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().teaFormVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      teas: {},
      teaFormVisible: false
    });
  });


  test('Check that ADD_TEA action works for teaListReducer and root reducer', () => {
    const action = {
      type: 'ADD_TEA',
      name: 'Organic Jasmine',
      price: 3,
      typeOfTea: "Herbal tea",
      inStock: 10,
      outOfStock: "Out of Stock",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().teas).toEqual(teaListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().teaFormVisible).toEqual(formVisibleReducer(undefined, action));
  });

});