import { BOOK_APARTMENT } from '../constants';

const initialState = {
  bookApartment: '',
};

export default function bookApartmentReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case BOOK_APARTMENT:
      return {
        ...state,
        bookApartment: payload,
      };
    default:
      return state;
  }
}
