/*
import { getFeedsApi, getOrdersApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrdersData } from '@utils-types';

type TOrders = {
  isOrdersError: boolean;
  isOrdersLoading: boolean;
  ordersData: TOrdersData;
};

const initialState: TOrders = {
  isOrdersError: false,
  isOrdersLoading: false,
  ordersData: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

export const orderBurger = createAsyncThunk(
  'auth/orderBurger',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);

export const getUserOrders = createAsyncThunk(
  'auth/getUserOrders',
  async () => await getOrdersApi()
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {
    getOrders: (state) => state.ordersData.orders,
    getFeedInfo: (state) => ({
      total: state.ordersData.total,
      totalToday: state.ordersData.totalToday
    }),
    getIsOrdersLoading: (state) => state.isOrdersLoading,
    getIsOrdersError: (state) => state.isOrdersError
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersFromServer.pending, (state) => {
        state.isOrdersError = false;
        state.isOrdersLoading = true;
      })
      .addCase(getOrdersFromServer.rejected, (state) => {
        state.isOrdersLoading = false;
        state.isOrdersError = true;
      })
      .addCase(getOrdersFromServer.fulfilled, (state, action) => {
        state.ordersData = action.payload;
        state.isOrdersLoading = false;
      });
  }
});

export const { getIsOrdersError, getIsOrdersLoading, getOrders, getFeedInfo } =
  ordersSlice.selectors;

export default ordersSlice.reducer;
*/
