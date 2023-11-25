// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './Reducers';

const store = configureStore({
  reducer: {
    chess: chessReducer,
  },
});

export default store;
