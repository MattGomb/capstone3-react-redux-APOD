import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/FilmsSlice';

const Store = configureStore({
  reducer: {
    films: filmsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
