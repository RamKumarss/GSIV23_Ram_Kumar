import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducer/searchInput';

export const store = configureStore({
  reducer: {
    searchReducer: searchSlice,
  },
});
