const initialState = {
    contactsTitle: '',
    counter: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CONTACTS_TITLE':
        return {
          ...state,
          contactsTitle: action.payload,
        };
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter + 1,
        };
      case 'DECREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  