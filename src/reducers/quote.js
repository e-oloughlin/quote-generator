const initialState = {
  value: 'Kung Flu',
};

// {
//   type: 'CHANGE_QUOTE',
//   value: 'Hilary clin is stupid',
// }

const quote = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUOTE':
      return {
        value: action.value,
      };

    default:
      return initialState;
  };
};

export default quote;
