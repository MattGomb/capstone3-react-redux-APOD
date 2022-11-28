import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://ghibliapi.herokuapp.com/films';

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async () => {
    const response = await fetch(url);
    const data = await response.json();

    const films = data.map((film) => ({
      id: film.id,
      title: film.title,
      titleOriginal: film.original_title_romanised,
      image: film.image,
      banner: film.movie_banner,
      description: film.description,
      director: film.director,
      producer: film.producer,
      date: film.release_date,
      runtime: film.running_time,
    }));
    return films;
  },
);

const initialState = [];

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => action.payload);
  },
});

export default filmsSlice.reducer;
