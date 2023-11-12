import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/loginData/loginData';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
