import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number1: '',
  number2: '',
  result: null,
  error: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
      state.result = null;
      state.error = null;
    },
    setNumber2: (state, action) => {
      state.number2 = action.payload;
      state.result = null;
      state.error = null;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setNumber1, setNumber2, setResult, setError } = calculatorSlice.actions;
export default calculatorSlice.reducer;
