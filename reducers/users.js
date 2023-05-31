
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: { 
  firstname: null,
  username: null,
  token: null },
};

export const usersSlice = createSlice({
 name: 'users',
  initialState,
    reducers: {
   login: (state, action) => {
    state.value.firstname = action.payload.firstname;
    state.value.username = action.payload.username;
    state.value.token = action.payload.token;
    console.log('reducer username login', action.payload.username)
    console.log('reducer username', state.value.username)

},
   logout: (state, action) => {
    state.value.firstname = null;
    state.value.username = null;
    state.value.token = null;
    console.log('reducer logout', state.value)

},
 },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;