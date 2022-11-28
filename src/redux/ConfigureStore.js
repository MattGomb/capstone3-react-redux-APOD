import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/Films';

const Store = configureStore({
  reducer: {
    films: filmsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
