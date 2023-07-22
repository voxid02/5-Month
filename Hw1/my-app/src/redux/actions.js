export const updateContactsTitle = (title) => {
    return {
      type: 'UPDATE_CONTACTS_TITLE',
      payload: title,
    };
  };
  
  export const incrementCounter = () => {
    return {
      type: 'INCREMENT_COUNTER',
    };
  };
  
  export const decrementCounter = () => {
    return {
      type: 'DECREMENT_COUNTER',
    };
  };
  