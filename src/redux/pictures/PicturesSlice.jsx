import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const todayurl = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI';
const random1url = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI&count=1';
const random20url = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI&count=20';

const initialState = [];

export const fetchDate = createAsyncThunk(
  'picture/fetchDate',
  async (date) => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI&date=${date}`);
    const dateData = await response.json();

    return dateData;
  },
);

export const fetchTodayApod = createAsyncThunk(
  'picture/fetchTodayPicture',
  async () => {
    const response = await fetch(todayurl);
    const todayPictureData = await response.json();

    return todayPictureData;
  },
);

export const fetchRandom1Apod = createAsyncThunk(
  'picture/fetchRandomPicture',
  async () => {
    const response = await fetch(random1url);
    const randomPictureData = await response.json();

    return randomPictureData;
  },
);

export const fetchRandom20Apod = createAsyncThunk(
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
    builder.addCase(fetchRandom20Apod.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchRandom1Apod.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchTodayApod.fulfilled, (state, action) => [{ ...action.payload }]);
    builder.addCase(fetchDate.fulfilled, (state, action) => [{ ...action.payload }]);
  },
});

export default picturesSlice.reducer;
