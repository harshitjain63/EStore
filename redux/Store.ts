import {configureStore} from '@reduxjs/toolkit';
import cartDatareducer from './Slice/CartSlice';
import authReducer from './Slice/userSlice';

export const store = configureStore({
  reducer: {
    cartdata: cartDatareducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
