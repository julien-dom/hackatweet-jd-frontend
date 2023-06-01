
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'tweets',
  initialState,
    reducers: {
    loadTweet: (state, action) => {
    state.value.push(action.payload)
    console.log('reducer tweets', state.value)
    console.log('reducer tweets action', action.payload)

},
 },
});

export const { loadTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;