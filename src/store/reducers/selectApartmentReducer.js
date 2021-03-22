import { SELECT_APARTMENT } from '../constants';

const initialState = {
  bookingData: '',
};

export default function selectApartmentReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SELECT_APARTMENT:
      return {
        ...state,
        bookingData: payload,
      };
    default:
      return state;
  }
}
