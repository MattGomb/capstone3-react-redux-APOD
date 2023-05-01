import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const todayurl = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI';
const random20url = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI&count=20';

const initialState = [];

export const fetchTodayApod = createAsyncThunk(
  'picture/fetchTodayPicture',
  async () => {
    const response = await fetch(todayurl);
    const todayPictureData = await response.json();

    return todayPictureData;
  },
);

export const fetchApod = createAsyncThunk(
  'picture/fetchPictures',
  async () => {
    const response = await fetch(random20url);
    const picturesData = await response.json();

    return picturesData;
  },
);

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApod.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchTodayApod.fulfilled, (state, action) => action.payload);
  },
});

export default picturesSlice.reducer;
