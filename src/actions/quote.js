export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// const fetchQuote = () => {
//     return {
//       type: FETCH_QUOTE_START,
//     };
// };

export const fetchQuote = () => {
  return (dispatch) => {
    // all functionality goes here
    // Tell the app we are going to fetch a quote
    dispatch({
      type: FETCH_QUOTE_START,
    });

    // fetch the quote from the API
    // if it succeeds, save the quote inside our redux store
    // if it fails, alert saying there was a failure
  };
};
