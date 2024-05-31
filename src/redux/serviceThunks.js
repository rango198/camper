import { createAsyncThunk } from '@reduxjs/toolkit';
import { favorite, getData } from '../api/api';

export const getDataCamperThunk = createAsyncThunk(
  'service/dataCamper',
  async ({ endPoint }, thunkAPI) => {
    try {
      const response = await getData({ endPoint });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFavoriteThunk = createAsyncThunk(
  'servise/updateFavorite',
  async ({ endPoint, params }, thunkAPI) => {
    try {
      const response = await favorite({ endPoint, params });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
