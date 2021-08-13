export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// const fetchQuote = () => {
//     return {
//       type: FETCH_QUOTE_START,
//     };
// };

export const fetchQuote = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_QUOTE_START,
      });

      const url = 'https://api.quotable.io/random';
      // fetch the quote from the API
      const res = await fetch(url);
      const newQuote = await res.json();
      console.log('newQuote: ', newQuote);
      const { content } = newQuote;
      // if it succeeds, save the quote inside our redux store
      dispatch({
        type: FETCH_QUOTE_SUCCESS,
        value: content,
      })
    } catch (err) {
      console.error(err);

      // if it fails, alert saying there was a failure
      dispatch({
        type: FETCH_QUOTE_FAILURE,
        value: '',
      })
    }
  };
};
