import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import selectApartmentReducer from './selectApartmentReducer';
import bookApartmentReducer from './bookApartmentReducer';

export default combineReducers({
  errors: errorReducer,
  selectApartment: selectApartmentReducer,
  bookApartment: bookApartmentReducer,
});
