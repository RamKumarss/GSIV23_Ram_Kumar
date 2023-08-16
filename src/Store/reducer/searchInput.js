import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
    clearValue: (state) => {
      state.value = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, clearValue } = searchSlice.actions;

export default searchSlice.reducer;
