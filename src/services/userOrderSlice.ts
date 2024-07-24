import { getOrdersApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TUserOrders = {
  isUserOrdersError: boolean;
  isUserOrdersLoading: boolean;
  orderRequest: boolean;
  orderModalData: TOrder | null;
  userOrders: TOrder[];
};

const initialState: TUserOrders = {
  isUserOrdersError: false,
  isUserOrdersLoading: false,
  orderRequest: false,
  orderModalData: null,
  userOrders: []
};

export const orderBurger = createAsyncThunk(
  'userOrders/orderBurger',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);

export const getUserOrdersFromServer = createAsyncThunk(
  'userOrders/getUserOrders',
  async () => await getOrdersApi()
);

export const userOrdersSlice = createSlice({
  name: 'userOrders',
  initialState,
  reducers: {},
  selectors: {
    getIsUserOrdersError: (state) => state.isUserOrdersError,
    getIsUserOrdersLoading: (state) => state.isUserOrdersLoading,
    getUserOrders: (state) => state.userOrders
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrdersFromServer.pending, (state) => {
        state.isUserOrdersLoading = true;
        state.isUserOrdersError = false;
      })
      .addCase(getUserOrdersFromServer.rejected, (state) => {
        state.isUserOrdersLoading = false;
        state.isUserOrdersError = true;
      })
      .addCase(getUserOrdersFromServer.fulfilled, (state, action) => {
        state.isUserOrdersLoading = false;
        state.userOrders = action.payload;
      });
  }
});

export const { getIsUserOrdersError, getIsUserOrdersLoading, getUserOrders } =
  userOrdersSlice.selectors;

export default userOrdersSlice.reducer;
