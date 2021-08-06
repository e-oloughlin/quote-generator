const initialState = {
  value: '',
};

const quote = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUOTE':
      return {
        value: action.value,
      };

    default:
      return state;
  };
};

export default quote;
