import { getOrdersApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TUserOrders = {
  isUserOrdersError: boolean;
  isUserOrdersLoading: boolean;
  orderRequest: boolean;
  orderModalData: TOrder | null;
  isOrderError: boolean;
  userOrders: TOrder[];
};

export const initialState: TUserOrders = {
  isUserOrdersError: false,
  isUserOrdersLoading: false,
  orderRequest: false,
  orderModalData: null,
  isOrderError: false,
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
  reducers: {
    clearOrderError: (state) => {
      state.isOrderError = false;
    },
    clearModalData: (state) => {
      state.orderModalData = null;
    }
  },
  selectors: {
    getIsUserOrdersError: (state) => state.isUserOrdersError,
    getIsUserOrdersLoading: (state) => state.isUserOrdersLoading,
    getUserOrders: (state) => state.userOrders,
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData,
    getIsOrderError: (state) => state.isOrderError
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderBurger.pending, (state) => {
        state.orderRequest = true;
        state.isOrderError = false;
        state.orderModalData = null;
      })
      .addCase(orderBurger.rejected, (state) => {
        state.orderRequest = false;
        state.isOrderError = true;
      })
      .addCase(orderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderModalData = action.payload.order;
      })

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

export const {
  getIsUserOrdersError,
  getIsUserOrdersLoading,
  getUserOrders,
  getOrderRequest,
  getOrderModalData,
  getIsOrderError
} = userOrdersSlice.selectors;
export const { clearOrderError, clearModalData } = userOrdersSlice.actions;

export default userOrdersSlice.reducer;
