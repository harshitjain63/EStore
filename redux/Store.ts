import {configureStore} from '@reduxjs/toolkit';
import cartDatareducer from './Slice/CartSlice';

export const store = configureStore({
  reducer: {
    cartdata: cartDatareducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
