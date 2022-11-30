import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.nasa.gov/planetary/apod?api_key=L2e4ErVWsFzkxZngJmD3PdOJ97g5JbWOTa01kYAI&count=10';

export const fetchApod = createAsyncThunk(
  'picture/fetchPictures',
  async () => {
    const response = await fetch(url);
    const data = await response.json();

    const pictures = data.map((picture) => ({
      title: picture.title,
      copyright: picture.copyright,
      date: picture.date,
      explanation: picture.explanation,
      image: picture.url,
      hdImage: picture.hdurl,
    }));
    return pictures;
  },
);

const initialState = [];

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApod.fulfilled, (state, action) => action.payload);
  },
});

export default picturesSlice.reducer;
