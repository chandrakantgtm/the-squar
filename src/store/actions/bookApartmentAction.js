import { BOOK_APARTMENT } from '../constants';

// Booking Apartment Form Data
export const bookApartment = (formData, dispatch) => {
  dispatch({
    type: BOOK_APARTMENT,
    payload: formData,
  });
  return formData;
};
