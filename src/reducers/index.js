import formVisibleReducer from './form-visible-reducer';
import teaListReducer from './tea-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  teaFormVisible: formVisibleReducer,
  teas: teaListReducer
});

export default rootReducer;