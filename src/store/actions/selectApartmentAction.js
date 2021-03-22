import { SELECT_APARTMENT } from '../constants';

// Select Apartment
export const selectApartment = (apartment, dispatch) => {
  dispatch({
    type: SELECT_APARTMENT,
    payload: apartment,
  });
  return apartment;
};
