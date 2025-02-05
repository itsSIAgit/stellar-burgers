import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrdersData } from '@utils-types';

type TOrders = {
  isOrdersError: boolean;
  isOrdersLoading: boolean;
  ordersData: TOrdersData;
};

export const initialState: TOrders = {
  isOrdersError: false,
  isOrdersLoading: false,
  ordersData: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

export const getOrdersFromServer = createAsyncThunk(
  'orders/getOrders',
  async () => await getFeedsApi()
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
        state.ordersData.orders = action.payload.orders;
        state.ordersData.total = action.payload.total;
        state.ordersData.totalToday = action.payload.totalToday;
        state.isOrdersLoading = false;
      });
  }
});

export const { getIsOrdersError, getIsOrdersLoading, getOrders, getFeedInfo } =
  ordersSlice.selectors;

export default ordersSlice.reducer;
