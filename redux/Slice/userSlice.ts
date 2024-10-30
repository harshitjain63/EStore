import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  email: string | null;
  photo: string | null;
}

const initialState: UserState = {
  name: null,
  email: null,
  photo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    clearUser(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;
