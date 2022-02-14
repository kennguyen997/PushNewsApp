import {createSlice} from '@reduxjs/toolkit';
import {OrderStyle} from '../../Models';
import {RootState} from './index';

const Order = createSlice({
  name: 'Order',
  initialState: null,
  reducers: {
    setCart(state, action) {
      return action.payload;
    },
  },
});

export const {setCart} = Order.actions;

export const OrderSelectors = {
  select: (state: RootState): OrderStyle | null => state.order,
};

export default Order.reducer;
