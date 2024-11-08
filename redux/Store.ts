import {configureStore} from '@reduxjs/toolkit';
import cartDatareducer from './Slice/CartSlice';
import authReducer from './Slice/userSlice';
import LogRocket from '@logrocket/react-native';

export const store = configureStore({
  reducer: {
    cartdata: cartDatareducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(LogRocket.reduxMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
