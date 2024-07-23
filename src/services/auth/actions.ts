import {
  TLoginData,
  TRegisterData,
  forgotPasswordApi,
  getOrdersApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  orderBurgerApi,
  refreshToken,
  registerUserApi,
  resetPasswordApi,
  updateUserApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (data: TLoginData) => await loginUserApi(data)
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => await logoutApi() //! При успехе удалить запись в куке и локал-стораж
);

//Работает
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async () => await getUserApi()
);

export const keepTokenActual = createAsyncThunk(
  'auth/keepTokenActual',
  async () => await refreshToken()
);

//Работает
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (user: Partial<TRegisterData>) => await updateUserApi(user)
);

//Работает
export const register = createAsyncThunk(
  'auth/register',
  async (data: TRegisterData) => await registerUserApi(data)
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: { email: string }) => await forgotPasswordApi(data)
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data: { password: string; token: string }) =>
    await resetPasswordApi(data)
);

export const orderBurger = createAsyncThunk(
  'auth/orderBurger',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);

export const getUserOrders = createAsyncThunk(
  'auth/getUserOrders',
  async () => await getOrdersApi()
);
