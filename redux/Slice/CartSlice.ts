import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  image: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
};

const initialState = {
  isLoading: false,
  data: [] as CartItem[],
  isError: false,
};

const cartDataSlice = createSlice({
  name: 'cartdata',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.data.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.data[itemIndex].quantity += action.payload.quantity ?? 1;
      } else {
        state.data.push({...action.payload, quantity: action.payload.quantity});
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.data.findIndex(
        item => item.id === action.payload,
      );
      if (itemIndex >= 0) {
        if (state.data[itemIndex].quantity > 1) {
          state.data[itemIndex].quantity -= 1;
        } else {
          state.data.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.data.findIndex(
        item => item.id === action.payload,
      );
      state.data.splice(itemIndex, 1);
    },
  },
});

export const {addItemToCart, removeItemFromCart, clearCart} =
  cartDataSlice.actions;
export default cartDataSlice.reducer;
