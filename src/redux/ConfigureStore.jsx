import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import picturesReducer from './pictures/PicturesSlice';

const Store = configureStore({
  reducer: {
    pictures: picturesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
