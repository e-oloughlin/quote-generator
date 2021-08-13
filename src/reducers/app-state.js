import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS } from '../actions/quote';

const initialState = {
  loading: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        loading: true,
      };

    case FETCH_QUOTE_SUCCESS:
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export default appState;
