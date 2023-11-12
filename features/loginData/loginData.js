import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    updateLoginState: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const {updateLoginState} = loginSlice.actions;

export default loginSlice.reducer;
