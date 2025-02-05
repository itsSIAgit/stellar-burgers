import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsSliceReducer from './ingredientsSlice';
import ordersSliceReducer from './ordersSlice';
import burgerSliceReducer from './burgerSlice';
import authSliceReducer from './auth/authSlice';
import userOrdersSliceReducer from './userOrderSlice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

export const rootReducer = combineReducers({
  ingredients: ingredientsSliceReducer,
  orders: ordersSliceReducer,
  burger: burgerSliceReducer,
  auth: authSliceReducer,
  userOrders: userOrdersSliceReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
