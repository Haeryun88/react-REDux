import { configureStore } from '@reduxjs/toolkit';
import AddReducer from './AddSlice';

export default configureStore({
  reducer: AddReducer,
});
