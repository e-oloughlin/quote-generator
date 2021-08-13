import { FETCH_QUOTE_FAILURE, FETCH_QUOTE_SUCCESS } from '../actions/quote';
const initialState = {
  value: '',
};

const quote = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_SUCCESS:
      return {
        value: action.value,
      };
    case FETCH_QUOTE_FAILURE:
      return {
        value: action.value,
      };

    default:
      return state;
  };
};

export default quote;
