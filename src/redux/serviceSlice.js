import { createSlice } from '@reduxjs/toolkit';
import { getDataCamperThunk, updateFavoriteThunk } from './serviceThunks';

const initialState = {
  error: null,
  isLoading: false,
  dataCamper: [],
  favorites: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDataCamperThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDataCamperThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.dataCamper = action.payload;
      })
      .addCase(getDataCamperThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFavoriteThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateFavoriteThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const updatedItem = action.payload;
        const index = state.favorites.findIndex(
          item => item.id === updatedItem.id
        );
        if (index !== -1) {
          state.favorites.splice(index, 1);
        } else {
          state.favorites.push(updatedItem);
        }
      })
      .addCase(updateFavoriteThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const serviceReducer = serviceSlice.reducer;