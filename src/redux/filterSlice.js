import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { filterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
