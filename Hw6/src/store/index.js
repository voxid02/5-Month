import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import usersReducer from './usersSlice';
import calculatorReducer from './calculatorSlice';

export const store = configureStore({
  reducer: {
    titleReducer, 
    usersReducer, 
    calculator: calculatorReducer, 
  },
});
